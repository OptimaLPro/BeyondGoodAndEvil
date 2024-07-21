import RectGreen from "/rect/Rect-green.svg"
import RectPink from "/rect/Rect-pink.svg"
import RectOrange from "/rect/Rect-orange.svg"
import FindOut from "/icons/FindOutWhite.svg";
import "./BeforeAsnwering.css";
import { Link } from "react-router-dom";

const BeforeAsnwering = () => {
    return (
        <>
            <div className="bg-[#6CB9F1] h-dvh">
                <div className="flex flex-col justify-center mx-[21px]">
                    <div className="mt-[40px] flex flex-col">
                        <span className="bold-font text-[38px]">Before answering</span>
                        <span className="text-[16px] regular-font text-white">(Please follow these rules)</span>
                    </div>
                    <div>
                        <div className="flex flex-col mt-[57px] gap-[35px]">

                            {/* First section */}
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <img src={RectGreen} alt="RectGreen" className="mr-[14px]" />
                                    </div>
                                    <span className="bold-font text-[20px] capitalize">be yourself. </span>
                                </div>
                                <div className="mt-[12px] w-[272px]">
                                    <span className="regular-font text-[16px] ">Provide your genuine responses without overthinking.</span>
                                </div>
                            </div>

                            {/* Second section */}
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <img src={RectPink} alt="RectGreen" className="mr-[14px]" />
                                    </div>
                                    <span className="bold-font text-[20px] capitalize">Time Matters. </span>
                                </div>
                                <div className="mt-[12px] w-[272px]">
                                    <span className="regular-font text-[16px]">Each question is timed to encourage fast and intuitive answers.</span>
                                </div>
                            </div>

                            {/* Third section */}
                            <div className="flex flex-col">
                                <div className="flex flex-row items-center">
                                    <div>
                                        <img src={RectOrange} alt="RectGreen" className="mr-[14px]" />
                                    </div>
                                    <span className="bold-font text-[20px] capitalize">Not choosing is still a choice.</span>
                                </div>
                                <div className="mt-[12px] w-[272px]">
                                    <span className="regular-font text-[16px]">When undecided, you can toss a coin to make a choice.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to="/question-cards">
                            <div className="bg-[#131313] mt-[50px] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[20px] text-[#F6F3F1]">Start</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BeforeAsnwering;