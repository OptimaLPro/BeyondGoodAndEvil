import { motion } from 'framer-motion';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import CardPNG from './CardSVG/CardPNG';
import QuitPopup from './QuitPopup/QuitPopup';
import ShareQuestion from './ShareQuestion/ShareQuestion';
import TransitionSlide from './TransitionSlides/TransitionSlide';
import ExitIcon from "/icons/ExitIcon.png";
import LeftIcon from "/icons/Left.svg";
import RightIcon from "/icons/Right.svg";
import SendQuestion from "/icons/SendQuestion.svg";
import SkipIcon from "/icons/Skip.svg";
import SkipVideo from "/video/CoinFlip.mp4"

function Cards({ CardsData, isTouchOpen }) {
    const [cards, setCards] = useState(CardsData);
    const questionNumer = [1, 2, 3, 4, 4.5, 5, 6, 7, 7.5, 8, 9, 10, 10.5, 11, 12, 13, 13.5, 14, 14.5, 15, 16];
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [currentID, setCurrentID] = useState(questionNumer[0]);
    const [showTransition, setShowTransition] = useState(false);
    const totalQuestions = useRef(cards.length);
    const [openShare, setOpenShare] = useState(false);
    const [cardUrl, setCardUrl] = useState("");
    const navigateTo = useNavigate();
    const location = useLocation();
    const [isDynamicCard, setIsDynamicCard] = useState(false);
    const [lastCard, setLastCard] = useState(false);
    const [timer, setTimer] = useState(22);
    const [quitPopup, setQuitPopup] = useState(false);
    const [numOfTransition, setNumOfTransition] = useState(1);
    const [anyMenuOpen, setAnyMenuOpen] = useState(true);
    const [iconClicked, setIconClicked] = useState(false);

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
        if (lastCard && !isDynamicCard) {
            navigateTo('/user-data');
        } else if (isDynamicCard) {
            navigateTo('/thanks-answering');
        }

        const pathSegments = location.pathname.split('/');
        const questionCardsIndex = pathSegments.findIndex(segment => segment === 'question-cards') + 1;

        if (pathSegments[questionCardsIndex]) {
            setIsDynamicCard(true);
        }

        if (!isDynamicCard) {
            if (currentID == totalQuestions.current) {
                setLastCard(true);
            }
        }

    }, [currentID]);

    useEffect(() => {
        if (questionIndex === 6 && questionIndex <= cards.length) {
            setNumOfTransition(1);
            setShowTransition(true);
        }
        else if (questionIndex === 11 && questionIndex <= cards.length) {
            setNumOfTransition(2);
            setShowTransition(true);
        }
        else if (questionIndex === 16 && questionIndex <= cards.length) {
            setNumOfTransition(3);
            setShowTransition(true);
        }
    }, [questionIndex]);

    useEffect(() => {
        if (!isTouchOpen) {
            setAnyMenuOpen(false);
        }
    }, [isTouchOpen]);

    useEffect(() => {
        if (!showTransition && !anyMenuOpen) {
            const timerId = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 1) {
                        swipe('up'); // Automatically skip the question
                        return 23; // Reset timer for the next question
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);
            return () => clearInterval(timerId); // Cleanup interval on component unmount or when question changes
        }
    }, [currentID, showTransition, anyMenuOpen]);

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
                    } else if (direction === "left") {
                        card.subquestions.forEach((subquestion) => {
                            if (subquestion.from === "no") {
                                addHalfCard(subquestion, cardID);
                                changed = true;
                                setQuestionIndex(questionIndex + 1);
                                setCurrentID(questionNumer[questionIndex]);
                                return;
                            }
                        });
                    } else if (direction === "up") {
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
        setTimer(22);
    };

    const outOfFrame = (name, idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    };

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < cards.length) {
            await childRefs[currentIndex].current.swipe(dir);
        }
    };

    const handleCloseTransition = () => {
        setShowTransition(false);
    };

    const toggleShare = () => {
        setOpenShare(!openShare);
    };

    const shareQuestion = () => {
        const currentCardUrl = cards[currentIndex]?.url;
        setCardUrl(currentCardUrl);
        toggleShare();
        setAnyMenuOpen(true);
    };

    const quitQuestion = () => {
        setQuitPopup(!quitPopup);
        setAnyMenuOpen(true);
    }

    const animateIcon = () => {
        console.log(iconClicked);
        swipe('right');

        console.log(iconClicked);
    }

    return (
        <>
            {showTransition && <TransitionSlide handleCloseTransition={handleCloseTransition} num={numOfTransition} />}
            <div className='flex flex-col w-full h-full h-screen-minus-74'>
                <div className="flex flex-col">
                    <div className="mx-6 mt-[23px] mb-[23px] flex items-center">
                        <div className="w-1/3">
                            <img src={ExitIcon} alt="Exit Icon" width={26} height={24} onClick={() => quitQuestion()} />
                        </div>
                        <div className="flex justify-center w-1/3">
                            {!isDynamicCard && (<span className="tracking-widest text-white joystix-font">
                                {currentID <= totalQuestions.current ? `${currentID}/${totalQuestions.current}` : ""}
                            </span>)}
                        </div>
                        <div className="w-1/3">
                            <div className='flex items-center justify-end mx-auto' onClick={shareQuestion}>
                                {(currentID == 1 || currentID == 2) &&
                                    (<motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                        className=''>
                                        <span className='text-[16px] text-white bold-font mr-0'>Share</span>
                                    </motion.div>)}
                                <div>
                                    <img src={SendQuestion} alt="SendQuestion" className='w-[75px] h-[40px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-[480px] items-center'>
                    {cards.map((card, index) => (
                        <TinderCard
                            ref={childRefs[index]}
                            className='swipe'
                            key={card.id}
                            preventSwipe={['up', 'down']}
                            swipeRequirementType='position'
                            swipeThreshold={1}
                            onSwipe={(dir) => swiped(dir, card.id, index)}
                            onCardLeftScreen={() => outOfFrame(card.id, index)}
                        >
                            <div className='flex justify-center w-full'>
                                <CardPNG card={card} currentID={currentID} showTransition={showTransition} anyMenuOpen={anyMenuOpen} />
                            </div>
                        </TinderCard>
                    ))}
                </div>

                {!showTransition &&
                    (<div className='fixed bottom-0 flex flex-col justify-end flex-grow w-full'>
                        <div className='h-[74px] bg-[#F6F3F1] flex'>
                            <div className={!isDynamicCard ? 'flex justify-between w-full mx-5' : 'flex justify-around w-full mx-5'}>
                                <img src={LeftIcon} alt="Left Icon" className="cursor-pointer left-icon" onClick={() => swipe('left')} />
                                {/* {!isDynamicCard && <img src={SkipIcon} alt="Skip Icon" className="cursor-pointer skip-icon" onClick={() => swipe('up')} />} */}
                                {!isDynamicCard && <div className='flex flex-col items-center justify-center' onClick={() => swipe('up')} ><video autoPlay loop muted playsInline className="bg-vid-cards">
                                    <source src={SkipVideo} type="video/mp4" />
                                </video></div>}
                                <motion.img
                                    src={RightIcon}
                                    alt="Right Icon"
                                    className="cursor-pointer right-icon"
                                    onClick={() => animateIcon()}
                                    animate={iconClicked ? { scale: [1, 2, 1] } : { scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    onAnimationComplete={() => setIconClicked(false)}
                                />
                            </div>
                        </div>
                    </div>)}
            </div>
            {openShare && <ShareQuestion isOpen={openShare} toggleShare={setOpenShare} cardUrl={cardUrl} setAnyMenuOpen={setAnyMenuOpen} />}
            {quitPopup && <QuitPopup quitPopup={quitPopup} setQuitPopup={setQuitPopup} setAnyMenuOpen={setAnyMenuOpen} />}
        </>
    );
}

export default Cards;
