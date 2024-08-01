import { useState } from "react";
import question1 from "/globaldata/question/1/1.svg";
import question105no from "/globaldata/question/10.5no/10.5no.svg";
import question105yes from "/globaldata/question/10.5yes/10.5yes.svg";
import question10 from "/globaldata/question/10/10.svg";
import question11 from "/globaldata/question/11/11.svg";
import question12 from "/globaldata/question/12/12.svg";
import question135no from "/globaldata/question/13.5no/13.5no.svg";
import question135yes from "/globaldata/question/13.5yes/13.5yes.svg";
import question13 from "/globaldata/question/13/13.svg";
import question145no from "/globaldata/question/14.5no/14.5no.svg";
import question145yes from "/globaldata/question/14.5yes/14.5yes.svg";
import question14 from "/globaldata/question/14/14.svg";
import question15 from "/globaldata/question/15/15.svg";
import question16 from "/globaldata/question/16/16.svg";
import question2 from "/globaldata/question/2/2.svg";
import question3 from "/globaldata/question/3/3.svg";
import question45no from "/globaldata/question/4.5no/4.5no.svg";
import question45yes from "/globaldata/question/4.5yes/4.5yes.svg";
import question4 from "/globaldata/question/4/4.svg";
import question5 from "/globaldata/question/5/5.svg";
import question6 from "/globaldata/question/6/6.svg";
import question75no from "/globaldata/question/7.5no/7.5no.svg";
import question75yes from "/globaldata/question/7.5yes/7.5yes.svg";
import question7 from "/globaldata/question/7/7.svg";
import question8 from "/globaldata/question/8/8.svg";
import question9 from "/globaldata/question/9/9.svg";
import question1gender from "/globaldata/question/1/gender.svg";
import question1age from "/globaldata/question/1/age.svg";
import question1country from "/globaldata/question/1/country.svg";
import question1situation from "/globaldata/question/1/situation.svg";
import PopupMenu from "../../../UserData/PopupMenu/PopupMenu";

const QuestionData = () => {
    const [openIndexes, setOpenIndexes] = useState(Array(26).fill(false));
    const [menuOpenIndex, setMenuOpenIndex] = useState(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [dataTypes, setDataTypes] = useState("Gender");

    // Array of questions
    const questions = [
        question1, question2, question3, question4, question45yes, question45no, question5, question6, question7, question75yes, question75no, question8, question9, question10, question105yes, question105no, question11, question12, question13, question135yes, question135no, question14, question145yes, question145no, question15, question16
    ];

    const images = {
        Gender: question1gender,
        Age: question1age,
        Country: question1country,
        Situation: question1situation
    };

    const toggleData = (index) => {
        const newOpenIndexes = [...openIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        setOpenIndexes(newOpenIndexes);
    }


    // const toggleData = (index) => {
    //     const newOpenIndexes = [...openIndexes];
    //     newOpenIndexes[index] = !newOpenIndexes[index];
    //     setOpenIndexes(newOpenIndexes);
    // }

    const handleTypeClick = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const fixedTop = rect.bottom + window.scrollY;
        const fixedLeft = rect.left + window.scrollX;

        setMenuPosition({ top: fixedTop, left: fixedLeft });
        setMenuOpenIndex(index === menuOpenIndex ? null : index);
    }

    return (
        <div className="mt-[18px]">
            <div className="flex flex-wrap justify-center mt-[18px]">
                {questions.map((question, index) => (
                    <>
                        <div className="relative w-full" key={index} >
                            <img
                                src={question}
                                alt={`Question ${index + 1}`}
                                className="w-full mb-[15px]"
                                onClick={() => toggleData(index)}
                            />
                            {openIndexes[index] && (
                                <>
                                     <img
                                    src={images[dataTypes]} // Use the image based on the selected type
                                    alt={`Question ${index + 1} ${dataTypes}`}
                                    className="w-full mb-[15px]"
                                />
                                    <div className="relative">
                                        <div className="w-fit bold-font bg-[#F6F3F1] text-[#131313] text-[12px] px-2 py-1 border-2 border-[#131313] absolute bottom-0 mb-[310px] ml-[8px]" onClick={(e) => handleTypeClick(e, index)}>
                                            <span>Gender</span>
                                        </div>
                                        <div className="">
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {menuOpenIndex === index && <PopupMenu labels={["Gender", "Age", "Situation", "Country"]} setCurrentAge={setDataTypes} setAgeMenu={setMenuOpenIndex} currentAge={dataTypes} position={menuPosition} />}
                    </>
                ))}
            </div>
        </div>
    );
}

export default QuestionData;
