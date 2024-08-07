import React from 'react';
import CardPopup from "/images/CardPopup.png";
import TouchIcon from "/icons/TouchIcon.svg";
import ExitIcon from "/icons/Exit.png";
import FindOut from "/icons/FindOutWhite.svg";
import { AnimatePresence, motion } from "framer-motion";
import SendQuestionWhite from "/icons/SendQuestionWhite.png";
import ShareCard from "/images/ShareCard.svg";
import SendQuestion from "/icons/SendQuestion.png";
import "./QuitPopup.css";
import "../QuestionCards.css";
import { Link } from 'react-router-dom';

const QuitPopup = ({ quitPopup, setQuitPopup }) => {
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
            <AnimatePresence>
                {quitPopup && (
                    <>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-50"
                            variants={blurVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        />
                        <motion.div
                            className="absolute bottom-0 z-50 w-full"
                            variants={variants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <img src={ShareCard} alt="CardPopup" className="w-full" />
                            <img
                                src={ExitIcon}
                                alt="ExitIcon"
                                className="exit-icon right-0 mb-[265px] mr-[13px] cursor-pointer"
                                onClick={() => setQuitPopup(false)}
                            />
                            <div className="absolute bottom-0 left-0 mb-[150px] ml-[30px] flex flex-col capitalize">
                                <span className='text-[20px] bold-font w-[80%]'>Dear human n. 29348,</span>
                                <span className='text-[16px] text-[#131313] regular-font w-[90%] mt-[5px] leading-[20px]'>You haven't finished answering all the questions. are you sure you want to exit the questionnaire?</span>
                            </div>
                            <div className="absolute z-[100] bottom-0 w-full flex ml-[30px] mb-[48px] flex-col" onClick={() => setQuitPopup(false)}>
                                <div>
                                    <div className="bg-[#131313] mt-[10px] w-fit p-[14px] flex gap-4 cursor-pointer">
                                        <span className="onboarding text-[14px] text-[#F6F3F1]">Continue Answering</span>
                                        <img src={FindOut} alt="Find Out" />
                                    </div>
                                </div>
                                <div className='mt-1'>
                                    <Link to="/user-data">
                                        <span className='text-white text-[12px] text-[#F6F3F1 regular-font capitalize'>yes, i had enough</span>
                                    </Link>

                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default QuitPopup;
