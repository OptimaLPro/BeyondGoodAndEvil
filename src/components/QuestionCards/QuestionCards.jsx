import "./QuestionCards.css"
import Advanced from "./Cards";

const QuestionCards = () => {
    return (
        <>
            <div className="h-screen bg-[#131313] grid-background overflow-x-hidden">
                <div className="flex flex-col h-full">
                    <Advanced />
                </div>
            </div>
        </>
    );
}

export default QuestionCards;