import { useParams } from "react-router-dom";
import "./QuestionCards.css";
import Cards from "./Cards";
import CardPopup from "/images/CardPopup.png";
import TouchIcon from "/icons/TouchIcon.svg";
import ExitIcon from "/icons/Exit.png";
import FindOut from "/icons/FindOutWhite.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const QuestionCards = ({ CardsData }) => {
    const { cardID } = useParams();
    const card = CardsData.find(c => c.url === cardID);
    const [currentCardData, setCurrentCardData] = useState([]);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (card) {
            setCurrentCardData([card]);
            console.log('Showing specific card:');
        } else {
            setCurrentCardData(CardsData);
            console.log('Showing all cards');
        }
        setCompleted(true);
    }, [card, CardsData]);

    const [isOpen, setIsOpen] = useState(true);

    const variants = {
        hidden: {
            y: "100%",
            opacity: 0,
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.3
            }
        },
        exit: {
            y: "100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    const blurVariants = {
        hidden: {
            backdropFilter: "blur(0px)",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        visible: {
            backdropFilter: "blur(10px)",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            <div className="h-dvh bg-[#131313] grid-background overflow-x-hidden overflow-y-hidden relative">
                <div className="flex flex-col h-full">
                    {completed && <Cards CardsData={currentCardData} />}
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                className="absolute inset-0 bg-black bg-opacity-50"
                                variants={blurVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                            />
                            <motion.div
                                className="absolute bottom-0 w-full"
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <img src={CardPopup} alt="CardPopup" className="w-full h-[500px]" />
                                <img
                                    src={ExitIcon}
                                    alt="ExitIcon"
                                    className="exit-icon right-0 mb-[455px] mr-[13px] cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                />
                                {!card ? (<>
                                    <img src={TouchIcon} alt="TouchIcon" className="touch-icon mx-auto w-full mt-2 mb-[330px]" />
                                    <span className="capitalize absolute bottom-0 left-0 text-[20px] bold-font w-[91px] mb-[220px] ml-[45px]">slide left for “no”</span>
                                    <span className="capitalize absolute bottom-0 right-0 text-[20px] bold-font w-[114px] text-right mb-[220px] mr-[45px]">slide right for “yes”</span>
                                    <div className="absolute z-[100] bottom-0 w-full flex justify-center mb-[80px]">
                                        <div
                                            className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="regular-font text-[20px] text-[#F6F3F1]">Got It</span>
                                            <img src={FindOut} alt="Find Out" />
                                        </div>
                                    </div>
                                </>) : (<>
                                    <span className="absolute bottom-0 left-0 text-[37px] bold-font w-[90%] mb-[370px] ml-[30px] leading-[40px]">Can you answer this moral dilemma?</span>
                                    <div className="absolute z-[100] bottom-0 w-full flex justify-start mb-[60px] ml-[30px]">
                                        <div
                                            className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="bold-font text-[14px] text-[#F6F3F1]">Answer Now</span>
                                            <img src={FindOut} alt="Find Out" />
                                        </div>
                                    </div>
                                </>
                                )}

                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}

export default QuestionCards;
