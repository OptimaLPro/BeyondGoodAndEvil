import { Link } from "react-router-dom";
import "./Onboarding.css";
import FindOut from "/icons/FindOutWhite.svg";

const Onboarding = () => {
    return (
        <div className="bg-[#f5f3f1] h-screen">
            <div className="flex flex-col h-full">
                <div className="flex flex-col justify-end h-[30%] ml-[26px]">
                    <span className="onboarding text-[43px]">Am I</span>
                    <span className="onboarding text-[43px]">A Good</span>
                    <span className="onboarding text-[43px]">Person?</span>
                </div>
                <div className="h-[50%] justify-end flex flex-col ml-[26px]">
                    <Link to="/video">
                        <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
                            <span className="onboarding text-[20px] text-[#F6F3F1]">Find Out</span>
                            <img src={FindOut} alt="Find Out" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;
