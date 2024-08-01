import { useState } from "react";
import question1 from "/globaldata/question/1.svg";
import question105no from "/globaldata/question/10.5no.svg";
import question105yes from "/globaldata/question/10.5yes.svg";
import question10 from "/globaldata/question/10.svg";
import question11 from "/globaldata/question/11.svg";
import question12 from "/globaldata/question/12.svg";
import question135no from "/globaldata/question/13.5no.svg";
import question135yes from "/globaldata/question/13.5yes.svg";
import question13 from "/globaldata/question/13.svg";
import question145no from "/globaldata/question/14.5no.svg";
import question145yes from "/globaldata/question/14.5yes.svg";
import question14 from "/globaldata/question/14.svg";
import question15 from "/globaldata/question/15.svg";
import question16 from "/globaldata/question/16.svg";
import question2 from "/globaldata/question/2.svg";
import question3 from "/globaldata/question/3.svg";
import question45no from "/globaldata/question/4.5no.svg";
import question45yes from "/globaldata/question/4.5yes.svg";
import question4 from "/globaldata/question/4.svg";
import question5 from "/globaldata/question/5.svg";
import question6 from "/globaldata/question/6.svg";
import question75no from "/globaldata/question/7.5no.svg";
import question75yes from "/globaldata/question/7.5yes.svg";
import question7 from "/globaldata/question/7.svg";
import question8 from "/globaldata/question/8.svg";
import question9 from "/globaldata/question/9.svg";

const QuestionData = () => {
    const [questions, setQuestions] = useState([
        question1, question2, question3, question4, question45yes, question45no, question5, question6, question7, question75yes, question75no, question8, question9, question10, question105yes, question105no, question11, question12, question13, question135yes, question135no, question14, question145yes, question145no, question15, question16
    ]);

    return (
        <div className="mt-[18px]">
            <div className="flex flex-wrap justify-center mt-[18px]">
                {questions.map((question, index) => (
                    <img key={index} src={question} alt={`Question ${index + 1}`} className="w-full mb-[15px]" />
                ))}
            </div>
            
        </div>
    )
}

export default QuestionData