import React, { useState, useMemo, useRef } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import CardSVG from './CardSVG/CardSVG';

const cards = [
    {
        id: 1,
        color: "#FD9DAF",
        text: "Do you think ethics is subjective?",
        subtext: null,
        textColor: "#000000"
    },
    {
        id: 2,
        color: "#FCD290",
        text: "A party member donates a large sum of money to a charity but only to increase his chances of winning. Is he a good person?",
        subtext: null,
        textColor: "#000000"
    }
];

function Advanced() {
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
    const [lastDirection, setLastDirection] = useState();
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
        () =>
            Array(cards.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < cards.length - 1;

    const canSwipe = currentIndex >= 0;

    const swiped = (direction, nameToDelete, index) => {
        setLastDirection(direction);
        updateCurrentIndex(index - 1);
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
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

    return (
        <div className='flex flex-col justify-center w-full'>
            <div className='cardContainer'>
                {cards.map((card, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={card.id}
                        onSwipe={(dir) => swiped(dir, card.id, index)}
                        onCardLeftScreen={() => outOfFrame(card.id, index)}
                    >
                        <div className='w-full flex justify-center'>
                            <CardSVG color={card.color} className="h-[90%]" />
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className='buttons mx-auto'>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
            {lastDirection ? (
                <h2 key={lastDirection} className='infoText'>
                    You swiped {lastDirection}
                </h2>
            ) : (
                <h2 className='infoText'>
                    Swipe a card or press
                </h2>
            )}
        </div>
    );
}

export default Advanced;
