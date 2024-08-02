import React, { useState, useEffect } from 'react';
import "./CardPNG.css";
import GIF5 from "/gifs/5.gif";
import rect1to18 from "/timer/1to18.svg";
import rect19 from "/timer/19.svg";
import rect20 from "/timer/20.svg";
import rect21 from "/timer/21.svg";
import rect22 from "/timer/22.svg";

const CardPNG = ({ card, currentID }) => {
    const [rectangles, setRectangles] = useState([rect1to18]);
    const [rectIndex, setRectIndex] = useState(0);

    useEffect(() => {
        const rects = [rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect1to18, rect19, rect20, rect21, rect22];
        const interval = setInterval(() => {
            setRectIndex((prevIndex) => {
                if (prevIndex < rects.length - 1) {
                    setRectangles((prevRectangles) => [...prevRectangles, rects[prevIndex + 1]]);
                    return prevIndex + 1;
                } else {
                    clearInterval(interval);
                    return prevIndex;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [currentID, card.id]);

    useEffect(() => {
        if (currentID == card.id) {
            setRectangles([rect1to18]);
            setRectIndex(0);
            console.log(currentID, card.id);
}
    }, [currentID, card.id]);

const cardStyle = {
    position: 'relative',
    maxWidth: '100%',
};

const textStyle = {
    position: 'absolute',
    left: '50%',
    top: '0px',
    transform: 'translate(-50%)',
    width: '85%',
    textAlign: 'left',
};

return (
    <>
        <div className='flex flex-col'>
            <div style={{ position: 'relative' }}>
                <img src={`/cards/${card.color}.png`} alt='Card' style={cardStyle} />
                <div className={`text-[28px] regular-font mt-[20px] leading-[32px] tracking-[-0.3px] z-50`} style={{ ...textStyle, color: card.textColor }}>
                    {card.text}
                    <div>
                        {card.subtext &&
                            <div className='mt-[17px] text-[20px] text-black lowercase bold-font'>{card.subtext}</div>}
                    </div>
                </div>
                <img src={card.gif} alt="GIF5" className="gif2 mb-[45px] ml-[250px]" />
                {currentID === card.id && <div className="progress-bar mx-[10px] absolute bottom-[-6px] flex">
                    {rectangles.map((rect, index) => (
                        <img src={rect} alt={`rect${index}`} key={index} />
                    ))}
                </div>}
            </div>
        </div>
    </>
);
};

export default CardPNG;
