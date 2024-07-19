import "./Homepage.css";
import Logo from "/images/Logo.svg";
import { Link } from "react-router-dom";
import FindOut from "/icons/FindOutWhite.svg";
import HomePagePink from "/images/HomePagePink.svg";
import GIF1 from "/gifs/1.gif";
import GIF2 from "/gifs/2.gif";
import GIF3 from "/gifs/3.gif";
import GIF4 from "/gifs/4.gif";
import Menu from "../Menu/Menu";

const Homepage = () => {
    return (
        <>
            <div className="h-screen homepage-bg">
                <div className="h-screen flex flex-col">
                    <div className="flex justify-between px-[20px] py-[11px]">
                        <img src={Logo} alt="logo" className="" />
                        <Menu />
                    </div>
                    <div>
                        <div className="flex flex-col gap-4 mt-[25px] px-[20px] w-[85%]">
                            <span className="capitalize bold-font text-[20px]">dear Human n. 20895,</span>
                            <span className="testing-font ">ready to make some tough moral decisions?</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/before-answering">
                            <div className="bg-[#131313] ml-[20px] mt-[19px] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[20px] text-[#F6F3F1]">Answer Questionary</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div>
                    <div className="mt-auto ">
                        <img src={HomePagePink} alt="Homepage Pink" className="w-full homepage-pink" />
                        <img src={GIF1} alt="GIF1" className="gif1 mb-[152px] ml-[60px]" />
                        <img src={GIF2} alt="GIF2" className="gif1 mb-[121px] ml-[100px]" />
                        <img src={GIF3} alt="GIF2" className="gif1 mb-[62px] ml-[262px]" />
                        <img src={GIF4} alt="GIF3" className="gif1 mb-[151px] ml-[300px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
