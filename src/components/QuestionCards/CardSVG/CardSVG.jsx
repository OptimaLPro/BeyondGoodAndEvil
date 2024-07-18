import React from 'react';

const CardSVG = ({ color }) => {
    return (
        <>
            <div className='text-white'>Card</div>
            <svg width="360" height="465" viewBox="0 0 360 465" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 0V5H5V15H0V450H5V460H15V465H345V460H355V450H360V15H355V5H345V0H15Z" fill={color} />
            </svg>
        </>
    );
};

export default CardSVG;