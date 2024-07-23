import ExitIcon from "/icons/Exit.png";
import "./TransitionSlide.css";
import GIF6 from "/transitionslide/6.gif";
import WellBeing from "/transitionslide/WellBeing.svg";
import Law from "/transitionslide/Law.svg";
import Protection from "/transitionslide/Protection.svg";
import Compassion from "/transitionslide/Compassion.svg";

const TransitionSlide = ({ handleCloseTransition, num }) => {
    return (
        <>
            <div className="z-[999]">
                {num === 1 && <TS1 handleCloseTransition={handleCloseTransition} />}
                {num === 2 && <TS2 handleCloseTransition={handleCloseTransition} />}
                {num === 3 && <TS3 handleCloseTransition={handleCloseTransition} />}
            </div>
        </>
    );
};

const TS1 = ({ handleCloseTransition }) => {
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <>
            <div className="h-screen bg-[#FA839F]" onClick={handleCloseTransition}>
                <div className="flex flex-col" onClick={stopPropagation}>
                    <div className="flex justify-end w-full p-3">
                        <img
                            src={ExitIcon}
                            alt="ExitIcon"
                            onClick={(e) => {
                                e.stopPropagation(); // Stop propagation here as well
                                handleCloseTransition();
                            }}
                        />
                    </div>
                    <div className="flex flex-col mx-auto" style={{ marginTop: '60px' }}>
                        <div>
                            <span className="regular-font text-[20px] leading-[23px]">So far you answered like</span>
                        </div>
                        <div className="text-[43px] bold-font flex flex-col mt-[17px] text-ts1">
                            <span className="mt-[10px]">Women<span className="text-white"> who are</span></span>
                            <span className="">30-40<span className="text-white">, who are</span></span>
                            <span className="">married<span className="text-white">, who are</span></span>
                            <span>Europe <span className="text-white">,</span></span>
                            <span className="text-white">on average.</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={GIF6} alt="GIF6" className="gif6" />
                    </div>
                </div>
            </div>
        </>
    );
};

const TS2 = ({ handleCloseTransition }) => {
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <>
            <div className="h-screen bg-[#6CB9F1]" onClick={handleCloseTransition}>
                <div className="flex flex-col" onClick={stopPropagation}>
                    <div className="flex justify-end w-full p-3">
                    <img
                            src={ExitIcon}
                            alt="ExitIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseTransition();
                            }}
                        />
                    </div>
                    <div className="flex flex-col mx-auto" style={{ marginTop: '60px' }}>
                        <div className="w-[300px] leading-[23px]">
                            <span className="regular-font text-[20px]">So far your answers align with these values</span>
                        </div>
                        <div className="flex flex-col justify-center mt-[74px]">
                            <div className="w-[330px]">
                                <img src={WellBeing} alt="WellBeing" className="well-being" />
                            </div>
                            <div className="w-[290px]">
                                <img src={Protection} alt="Protection" className="protection" />
                            </div>
                            <div className="w-[245px]">
                                <img src={Law} alt="Law" className="law" />
                            </div>
                            <div className="w-[200px]">
                                <img src={Compassion} alt="Compassion" className="compassion" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const TS3 = ({ handleCloseTransition }) => {
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <>
            <div className="h-screen bg-[#FA839F]" onClick={handleCloseTransition}>
                <div className="flex flex-col" onClick={stopPropagation}>
                    <div className="flex justify-end w-full p-3">
                        <img
                            src={ExitIcon}
                            alt="ExitIcon"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCloseTransition();
                            }}
                        />
                    </div>
                    <div className="flex flex-col mx-auto" style={{ marginTop: '60px' }}>
                        <div className="flex flex-col leading-[23px]">
                            <span className="regular-font text-[20px]">On <span className="bold-font">the last question,</span></span>
                            <span className="regular-font text-[20px]">you answered like</span>
                        </div>
                        <div className="text-[43px] bold-font flex flex-col mt-[17px] text-ts1">
                            <span className="mt-[10px]">Man<span className="text-white"> who are</span></span>
                            <span className="">20-30<span className="text-white">, and are</span></span>
                            <span className="">Single<span className="text-white">, from</span></span>
                            <span>The Middle East <span className="text-white">,</span></span>
                            <span className="text-white">on average.</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={GIF6} alt="GIF6" className="gif6" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransitionSlide;
