import React from 'react';
import GIF5 from "/gifs/5.gif";
import "./CardPNG.css";
import ProgressBar from "/images/ProgressBar.svg";


const CardPNG = ({ card }) => {
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
            <div className='flex flex-col' >
                <div style={{ position: 'relative' }}>
                    <img src={`/cards/${card.color}.png`} alt='Card' style={cardStyle} />
                    <div className='text-[28px] regular-font mt-[20px] leading-[32px] tracking-[-0.3px] z-50 capitalize' style={textStyle}>{card.text}</div>
                    <img src={GIF5} alt="GIF5" className="gif2 mb-[45px] ml-[280px]" />
                    <img src={ProgressBar} alt="ProgressBar" className="progress-bar mx-[10px]  absolute bottom-[-6px]" />
                </div>
            </div>

        </>
    );
};

export default CardPNG;
