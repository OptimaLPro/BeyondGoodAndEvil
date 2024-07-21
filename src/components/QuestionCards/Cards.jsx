import React, { useState, useMemo, useRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import CardPNG from './CardSVG/CardPNG';
import BackIcon from "/icons/Back.svg";
import LeftIcon from "/icons/Left.png";
import RightIcon from "/icons/Right.png";
import SkipIcon from "/icons/Skip.png";
import SendQuestion from "/icons/SendQuestion.png";
import CarsData from './Data';
import { Link, useNavigate } from 'react-router-dom';
import TransitionSlide from './TransitionSlides/TransitionSlide';
import ShareQuestion from './ShareQuestion/ShareQuestion';

function Cards() {
    const [cards, setCards] = useState([...CarsData]);
    const questionNumer = [1, 2, 3, 4, 4.5, 5, 6, 7, 7.5, 8, 9, 10, 10.5, 11, 12, 13, 13.5, 14, 14.5, 15, 16];
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [currentID, setCurrentID] = useState(questionNumer[0]);
    const [showTransition, setShowTransition] = useState(false);
    const totalQuestions = useRef(cards.length);
    const [openShare, setOpenShare] = useState(false);
    const navigateTo = useNavigate();

    const childRefs = useMemo(() => {
        return Array(cards.length)
            .fill(0)
            .map((i) => React.createRef());
    }, [cards.length]);

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    useEffect(() => {
        if (currentID == totalQuestions.current) {
            navigateTo('/user-data')
        }
    }, [currentID]);

    useEffect(() => {
        if (questionIndex % 6 === 0 && questionIndex <= cards.length) {
            setShowTransition(true);
        }
    }, [questionIndex]);

    const addHalfCard = (subquestion, cardID) => {
        setCards((prevCards) => {
            const newCards = [...prevCards];
            const cardIndex = newCards.findIndex((card) => card.id === cardID);
            newCards.splice(cardIndex, 0, subquestion); // Insert subquestion before the current card
            return newCards;
        });
    };

    const canGoBack = currentIndex < cards.length - 1;
    const canSwipe = currentIndex >= 0;

    const swiped = (direction, cardID, index) => {
        var changed = false;

        cards.map((card) => {
            if (card.id === cardID) {
                if (card.subquestions) {
                    if (direction === "right") {
                        card.subquestions.forEach((subquestion) => {
                            if (subquestion.from === "yes") {
                                addHalfCard(subquestion, cardID);
                                changed = true;
                                setQuestionIndex(questionIndex + 1);
                                setCurrentID(questionNumer[questionIndex]);
                                return;
                            }
                        });
                    }
                    else if (direction === "left") {
                        card.subquestions.forEach((subquestion) => {
                            if (subquestion.from === "no") {
                                addHalfCard(subquestion, cardID);
                                changed = true;
                                setQuestionIndex(questionIndex + 1);
                                setCurrentID(questionNumer[questionIndex]);
                                return;
                            }
                        });
                    }
                    else if (direction === "up") {
                        changed = true;
                        setQuestionIndex(questionIndex + 2);
                        setCurrentID(questionNumer[questionIndex]);
                        updateCurrentIndex(index - 1);
                        return;
                    }
                }
            }
        });

        if (changed) return;
        setQuestionIndex(questionIndex + 1);
        setCurrentID(questionNumer[questionIndex]);
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < cards.length) {
            await childRefs[currentIndex].current.swipe(dir);
        }
    };

    const goBack = async () => {
        if (!canGoBack) return;
        const newIndex = currentIndex + 1;
        updateCurrentIndex(newIndex);
        await childRefs[newIndex].current.restoreCard();
    };

    const handleCloseTransition = () => {
        setShowTransition(false);
    };

    const toggleShare = () => {
        setOpenShare(!openShare);
    }

    return (
        <>
            {showTransition && <TransitionSlide handleCloseTransition={handleCloseTransition} num={questionIndex / 6} />}
            <div className='flex flex-col w-full h-full h-screen-minus-74'>
                <div className="flex flex-col">
                    <div className="mx-4 mt-4 mb-[20px] flex items-center">
                        <div className="w-1/3">
                            <Link to="/">
                                <img src={BackIcon} alt="Back Icon" width={11} height={15} />
                            </Link>
                        </div>
                        <div className="flex justify-center w-1/3">
                            <span className="tracking-widest text-white joystix-font">
                                {currentID <= totalQuestions.current ? `${currentID}/${totalQuestions.current}` : ""}
                            </span>
                        </div>
                        <div className="w-1/3" />
                    </div>
                </div>
                <div className='flex flex-col h-[480px] items-center'>
                    {cards.map((card, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={card.id}
                            preventSwipe={['up', 'down']}
                            onSwipe={(dir) => swiped(dir, card.id, index)}
                            onCardLeftScreen={() => outOfFrame(card.id, index)}
                        >
                            <div className='flex justify-center w-full'>
                                <CardPNG card={card} />
                            </div>
                        </TinderCard>
                    ))}
                </div>
                <div className='h-[66px] flex justify-center mx-auto items-center' onClick={() => setOpenShare(true)}>
                    {currentID == 1 && (<div>
                        <span className='text-[12px] text-white bold-font'>Share this question</span>
                    </div>)}
                    <div>
                        <img src={SendQuestion} alt="SendQuestion" />
                    </div>
                </div>
                {!showTransition &&
                    (<div className='fixed bottom-0 flex flex-col justify-end flex-grow w-full'>
                        <div className='h-[74px] bg-[#F6F3F1] flex'>
                            <div className='flex justify-between w-full mx-5'>
                                <img src={LeftIcon} alt="Left Icon" className="left-icon mt-[15px] cursor-pointer" onClick={() => swipe('left')} />
                                <img src={SkipIcon} alt="Skip Icon" className="skip-icon mt-[4px] cursor-pointer" onClick={() => swipe('up')} />
                                <img src={RightIcon} alt="Right Icon" className="right-icon mt-[9px] cursor-pointer" onClick={() => swipe('right')} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <ShareQuestion isOpen={openShare} toggleShare={toggleShare} />
        </>
    );
}

export default Cards;
