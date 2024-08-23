import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Onboarding.css";
import FindOut from "/icons/FindOutWhite.svg";
import PixeledFrame from "/images/PixeledFrame.png";
import Opener from "/video/Opener.mp4";


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
        // <div className="bg-[#f5f3f1] h-screen relative">
        //     <div className="flex flex-col h-full">
        //         <div className="flex flex-col justify-end h-[30%] ml-[26px] relative">
        //             <span className="onboarding text-[43px]">Am I</span>
        //             <span className={`onboarding text-[43px] transition-text ${isGood ? 'text-good' : 'text-bad'}`}>
        //                 {isGood ? 'A Good' : 'A Bad'}
        //             </span>
        //             <span className="onboarding text-[43px]">Person?</span>
        //             {/* Pixelated Frame */}
        //             {/* <img
        //                 src={PixeledFrame}
        //                 alt="Pixelated Frame"
        //                 className={`h-[45.15px] w-[155px] cpixelated-frame ${isPixelated ? 'fade-in' : 'fade-out'}`}
        //             /> */}
        //         </div>
        //         <div className="h-[50%] justify-end flex flex-col ml-[26px]">
        //             <Link to="/video">
        //                 <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
        //                     <span className="onboarding text-[20px] text-[#F6F3F1]">Find Out</span>
        //                     <img src={FindOut} alt="Find Out" />
        //                 </div>
        //             </Link>
        //         </div>
        //     </div>
        // </div>

        <>
            <video autoPlay loop muted playsInline className="bg-vid">
                <source src={Opener} type="video/mp4" />
            </video>
            <div className="h-screen bg-[#f5f3f1]">
                <div className="flex flex-col h-full z-[9999]">
                    {/* <div className="flex flex-col justify-end h-[10%] ml-[26px]">
                </div> */}
                    <div className="absolute bottom-[140px] left-[20px]">
                        <Link to="/video">
                            <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[20px] text-[#F6F3F1]">Find Out</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Onboarding;
