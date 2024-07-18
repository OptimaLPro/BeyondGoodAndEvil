import "./QuestionCards.css"
import BackIcon from "/icons/Back.svg";
import Advanced from "./Cards";

const QuestionCards = () => {
    return (
        <>
            <div className="h-screen bg-[#131313] grid-background">
                <div className="flex flex-col">
                    <div className="mx-4 mt-4 flex items-center">
                        <div className="w-1/3">
                            <img src={BackIcon} alt="Back Icon" className="" width={11} height={15} />
                        </div>
                        <div className="w-1/3 justify-center flex">
                            <span className="joystix-font text-white tracking-widest">1/16</span>
                        </div>
                        <div className="w-1/3">
                        </div>
                    </div>
                    <div className="mt-[20px] flex ">
                        <Advanced />
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionCards;