import React from 'react';
import CardPopup from "/images/CardPopup.png";
import TouchIcon from "/icons/TouchIcon.svg";
import ExitIcon from "/icons/Exit.png";
import FindOut from "/icons/FindOutWhite.svg";
import { AnimatePresence, motion } from "framer-motion";
import SendQuestionWhite from "/icons/SendQuestionWhite.png";
import ShareCard from "/images/ShareCard.svg";
import SendQuestion from "/icons/SendQuestion.png";
import "./ShareQuestion.css";
import "../QuestionCards.css";

const ShareQuestion = ({ isOpen, toggleShare, cardUrl }) => {

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

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this question!',
                url: `https://beyondgoodandevil.vercel.app${"/question-cards/" + cardUrl}`
            })
            .then(() => {
                console.log('Successfully shared');
            })
            .catch((error) => {
                console.error('Nothing shared:', error);
                alert('Nothing shared: ' + error.message);
            });
        } else {
            console.log('Web Share API not supported in this browser');
            alert('Web Share API not supported in this browser');
        }
    };

    return (
        <>
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
                                onClick={toggleShare}
                            />
                            <span className="absolute bottom-0 left-0 text-[20px] bold-font w-[80%] mb-[140px] ml-[45px]">Want a friend's perspective on this question? Share it now!</span>
                            <div className="absolute z-[100] bottom-0 w-full flex ml-[45px] mb-[50px]">
                                <div
                                    className="bg-[#DCECA1] w-fit p-[14px] flex cursor-pointer border-black border-2"
                                    onClick={handleShare}
                                >
                                    <span className="bold-font text-[14px] text-[#131313]">Share This Question</span>
                                    <img src={SendQuestionWhite} alt="SendQuestionWhite" className='send-question mt-[2px]' />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

export default ShareQuestion;
