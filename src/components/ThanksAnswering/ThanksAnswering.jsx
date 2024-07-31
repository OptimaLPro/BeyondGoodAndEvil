import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./ThanksAnswering.css";
import GIF1 from "/gifs/1.gif";
import GIF2 from "/gifs/2.gif";
import GIF3 from "/gifs/3.gif";
import GIF4 from "/gifs/4.gif";
import FindOut from "/icons/FindOutWhite.svg";
import HomePagePink from "/images/HomePagePink.svg";
import Logo from "/images/Logo.svg";


const ThanksAnswering = () => {
    return (
        <>
            <div className="h-screen blue-gradient-bg grid2-background">
                <div className="flex flex-col h-screen">
                    <Navbar />
                    <div>
                        <div className="flex flex-col gap-4 mt-[25px] px-[20px] ">
                            <div className="leading-[33px] w-[85%]">
                                <span className="capitalize bold-font text-[38px] ">Thank you for your answer!</span>
                            </div>
                            <span className="text-[23px] tracking-[-0.4px] leading-[24px]">Curious about more ethical dilemmas? Join the full questionnaire and explore how your choices compare with people around the world.</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/homepage">
                            <div className="bg-[#131313] ml-[20px] mt-[19px] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[14px] text-[#F6F3F1]">Continue to Full Site</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div>
                    <div className="mt-auto ">
                        <img src={HomePagePink} alt="Homepage Pink" className="w-full" />
                        <img src={Logo} alt="Logo" className="logo-svg mb-[151px] ml-[100px]" />
                        <img src={GIF3} alt="GIF2" className="gif1 mb-[62px] ml-[300px]" />
                        <img src={GIF4} alt="GIF3" className="gif1 mb-[151px] ml-[345px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThanksAnswering;
