import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Onboarding.css";
import FindOut from "/icons/FindOutWhite.svg";
import PixeledFrame from "/images/PixeledFrame.png";

const Onboarding = () => {
    const [isGood, setIsGood] = useState(true);
    const [isPixelated, setIsPixelated] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGood((prev) => !prev);
            setIsPixelated((prev) => !prev); // Toggle pixelated state
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#f5f3f1] h-screen relative">
            <div className="flex flex-col h-full">
                <div className="flex flex-col justify-end h-[30%] ml-[26px] relative">
                    <span className="onboarding text-[43px]">Am I</span>
                    <span className={`onboarding text-[43px] transition-text ${isGood ? 'text-good' : 'text-bad'}`}>
                        {isGood ? 'A Good' : 'A Bad'}
                    </span>
                    <span className="onboarding text-[43px]">Person?</span>
                    {/* Pixelated Frame */}
                    {/* <img
                        src={PixeledFrame}
                        alt="Pixelated Frame"
                        className={`h-[45.15px] w-[155px] cpixelated-frame ${isPixelated ? 'fade-in' : 'fade-out'}`}
                    /> */}
                </div>
                <div className="h-[50%] justify-end flex flex-col ml-[26px]">
                    <Link to="/video">
                        <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
                            <span className="onboarding text-[20px] text-[#F6F3F1]">Find Out</span>
                            <img src={FindOut} alt="Find Out" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;
