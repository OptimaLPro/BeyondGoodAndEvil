import ExitIcon from "/icons/Exit.png";
import "./TransitionSlide.css";
import GIF6 from "/transitionslide/6.gif";

const TransitionSlide = ({ handleCloseTransition, num }) => {
    const ts1options = [
        <TS1 handleCloseTransition={handleCloseTransition} gender={"Men"} age={"40-59"} situation={"Divorced"} country={"United States"} />,
        <TS1 handleCloseTransition={handleCloseTransition} gender={"Women"} age={"40-59"} situation={"Married With Children"} country={"Canada"} />,
        <TS1 handleCloseTransition={handleCloseTransition} gender={"Women"} age={"18-24"} situation={"Single"} country={"North America"} />,
        <TS1 handleCloseTransition={handleCloseTransition} gender={"Men"} age={"40-59"} situation={"Married With Children"} country={"Asia"} />,
    ]

    const ts2options = [
        <TS2 handleCloseTransition={handleCloseTransition} value1={"Dignity 30%"} value2={"Responsibility 30%"} value3={"Honesty 22%"} value4={"Autonomy 18%"} />,
        <TS2 handleCloseTransition={handleCloseTransition} value1={"Compassion 30%"} value2={"Justice 25%"} value3={"Sustainability 25%"} value4={"Solidarity 20%"} />,
        <TS2 handleCloseTransition={handleCloseTransition} value1={"Responsibility 30%"} value2={"Law 25%"} value3={"Protection 25%"} value4={"Well-being 20%"} />,
    ]

    const ts3options = [
        <TS3 handleCloseTransition={handleCloseTransition} gender={"Women"} age={"17 and under"} situation={"Single"} country={"South America"} />,
        <TS3 handleCloseTransition={handleCloseTransition} gender={"Men"} age={"60 and over"} situation={"Widowed"} country={"Europe"} />,
        <TS3 handleCloseTransition={handleCloseTransition} gender={"Women"} age={"25-39"} situation={"Single"} country={"Europe"} />,
        <TS3 handleCloseTransition={handleCloseTransition} gender={"Women"} age={"30-39"} situation={"Single Parent"} country={"India"} />
    ]

    const getRandomTS1Option = () => {
        const randomIndex = Math.floor(Math.random() * ts1options.length);
        return ts1options[randomIndex];
    };

    const getRandomTS2Option = () => {
        const randomIndex = Math.floor(Math.random() * ts2options.length);
        return ts2options[randomIndex];
    }

    const getRandomTS3Option = () => {
        const randomIndex = Math.floor(Math.random() * ts3options.length);
        return ts3options[randomIndex];
    }

    return (
        <>
            <div className="z-[999]">
                {num === 1 && getRandomTS1Option()}
                {num === 2 && getRandomTS2Option()}
                {num === 3 && getRandomTS3Option()}
            </div>
        </>
    );
};

const TS1 = ({ handleCloseTransition, gender, age, situation, country }) => {
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
                    <div className="flex flex-col mx-auto w-[80%]" style={{ marginTop: '60px' }}>
                        <div>
                            <span className="regular-font text-[20px] leading-[23px]">So far you answered like</span>
                        </div>
                        <div className="text-[43px] bold-font flex flex-col mt-[17px] text-ts1">
                            <span className="mt-[10px]">{gender}<span className="text-white"> who are</span></span>
                            <span className="">{age}<span className="text-white">, and are</span></span>
                            <span className="">{situation}<span className="text-white">, from</span></span>
                            <span>{country}<span className="text-white">,</span></span>
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

const TS2 = ({ handleCloseTransition, value1, value2, value3, value4 }) => {
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
                            <span className="regular-font text-[20px]">So far your answers <span className="bold-font">align with these values</span></span>
                        </div>
                        <div className="flex flex-col justify-center mt-[65px]">
                            <div className="w-[330px] border-2 border-[#131313] bg-[#FDD7CD] px-[14px] py-[10px]">
                                <span className="text-[#131313] bold-font text-[28px]">{value1}</span>
                            </div>
                            <div className="w-[309px] border-2 border-[#131313] bg-[#FD7D82] px-[14px] py-[10px]">
                                <span className="text-[#131313] bold-font text-[28px]">{value2}</span>
                            </div>
                            <div className="w-[291px] border-2 border-[#131313] bg-[#FFE0AF] px-[14px] py-[10px]">
                                <span className="text-[#131313] bold-font text-[28px]">{value3}</span>
                            </div>
                            <div className="w-[273px] border-2 border-[#131313] bg-[#FDC49F] px-[14px] py-[10px]">
                                <span className="text-[#131313] bold-font text-[28px]">{value4}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const TS3 = ({ handleCloseTransition, gender, age, situation, country }) => {
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
                    <div className="flex flex-col mx-auto w-[80%]" style={{ marginTop: '60px' }}>
                        <div className="flex flex-col leading-[23px]">
                            <span className="regular-font text-[20px]">On <span className="bold-font">the last question,</span></span>
                            <span className="regular-font text-[20px]">you answered like</span>
                        </div>
                        <div className="text-[43px] bold-font flex flex-col mt-[17px] text-ts1">
                            <span className="mt-[10px]">{gender}<span className="text-white"> who are</span></span>
                            <span className="">{age}<span className="text-white">, and are</span></span>
                            <span className="">{situation}<span className="text-white">, from</span></span>
                            <span>{country}<span className="text-white">,</span></span>
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
