import { useState, useRef } from "react";
import PopupMenu from "../../../UserData/PopupMenu/PopupMenu";
import "./QuestionData.css";
import { ImagesQuestions } from "./GlobalData";
import Skip from "/icons/Skip.svg";
import { motion } from "framer-motion";

const QuestionData = () => {
    const [openIndexes, setOpenIndexes] = useState(Array(26).fill(false));
    const [menuOpenIndex, setMenuOpenIndex] = useState(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [dataTypes, setDataTypes] = useState(Array(26).fill("Country"));
    const constraintsRef = useRef(null);

    const toggleData = (index) => {
        const newOpenIndexes = [...openIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        setOpenIndexes(newOpenIndexes);
    }

    const handleTypeClick = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const fixedTop = rect.bottom + window.scrollY;
        const fixedLeft = rect.left + window.scrollX;

        setMenuPosition({ top: fixedTop, left: fixedLeft });
        setMenuOpenIndex(index === menuOpenIndex ? null : index);
    }

    const handleMenuSelect = (index, type) => {
        const newDataTypes = [...dataTypes];
        newDataTypes[index] = type;
        setDataTypes(newDataTypes);
        setMenuOpenIndex(null);
    }

    return (
        <div className="mt-[18px]">
            <div className="flex flex-wrap justify-center mt-[18px]">
                {ImagesQuestions.map((question, index) => (
                    <>
                        <div className="relative w-full" key={index} >
                            <img
                                src={question.main}
                                alt={`Question ${index + 1}`}
                                className="w-full mb-[15px]"
                                onClick={() => toggleData(index)}
                            />
                            {openIndexes[index] && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: -40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className="flex flex-col bg-questiondata mb-[9px]">
                                        <div className="mt-[15px] mx-[10px] leading-4">
                                            <span className="text-[#F6F3F1] regular-font text-[14px]">{question.question}</span>
                                        </div>
                                        <div className="mt-[19px] mb-[20px] flex items-center justify-between">
                                            <div>
                                                <div className="mx-[10px]">
                                                    <div className="w-fit bold-font bg-[#F6F3F1] text-[#131313] text-[12px] px-2 py-1 border-2 border-[#131313]" onClick={(e) => handleTypeClick(e, index)}>
                                                        <span>{dataTypes[index]}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-end mx-[10px]">
                                                <div>
                                                    <img src={Skip} alt="Skip" className="w-[33px] h-[30px]" />
                                                </div>
                                                <div className="flex flex-col leading-3">
                                                    <span className="text-[#131313] text-[12px] bold-font">{question.not_decided} people</span>
                                                    <span className="text-[#F6F3F1] text-[12px] bold-font">couldn't decide</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mx-[10px]">
                                            {dataTypes[index] === "Country" ? (
                                                <motion.div className="w-full overflow-hidden" ref={constraintsRef}>
                                                    <motion.img
                                                        src={question.data[dataTypes[index]]}
                                                        alt={`Question ${index + 1} ${dataTypes[index]}`}
                                                        className="scale-125"
                                                        drag
                                                        dragConstraints={{
                                                            top: -10,
                                                            left: -10,
                                                            right: 10,
                                                            bottom: 10
                                                        }}
                                                        dragElastic={0.2}
                                                    />
                                                </motion.div>
                                            ) : (
                                                <img
                                                    src={question.data[dataTypes[index]]}
                                                    alt={`Question ${index + 1} ${dataTypes[index]}`}
                                                    className="w-full mb-[15px]"
                                                />
                                            )}
                                        </div>
                                    </motion.div>
                                </>
                            )}
                        </div>
                        {menuOpenIndex === index && (
                            <PopupMenu
                                labels={["Gender", "Age", "Situation", "Country"]}
                                setCurrentAge={(type) => handleMenuSelect(index, type)}
                                setAgeMenu={setMenuOpenIndex}
                                currentAge={dataTypes[index]}
                                position={menuPosition}
                            />
                        )}
                    </>
                ))}
            </div>
        </div >
    );
}

export default QuestionData;
