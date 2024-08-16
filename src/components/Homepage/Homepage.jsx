import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import GIF1 from "/gifs/1.gif";
import GIF2 from "/gifs/2.gif";
import GIF3 from "/gifs/3.gif";
import GIF4 from "/gifs/4.gif";
import FindOut from "/icons/FindOutWhite.svg";
import HomePagePink from "/images/HomePagePink.svg";

const Homepage = () => {
    return (
        <>
            <div className="h-screen blue-gradient-bg grid2-background">
                <div className="flex flex-col h-screen">
                    <Navbar />
                    <div>
                        <div className="flex flex-col gap-4 mt-[25px] px-[20px] w-[85%]">
                            <span className="capitalize bold-font text-[20px]">dear Human n. 209348,</span>
                            <span className="testing-font ">Discover which ethical principles guide your choices</span>
                        </div>
                    </div>
                    <div>
                        <Link to="/before-answering">
                            <div className="bg-[#131313] ml-[20px] mt-[19px] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[14px] text-[#F6F3F1]">Answer Questionary</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div> 
                    <div className="mt-auto ">
                        <img src={HomePagePink} alt="Homepage Pink" className="w-full" />
                        <img src={GIF1} alt="GIF1" className="gif-homepage mb-[232px] ml-[60px]" />
                        <img src={GIF2} alt="GIF2" className="gif-homepage mb-[181px] ml-[100px]" />
                        <img src={GIF3} alt="GIF2" className="gif-homepage mb-[122px] ml-[262px]" />
                        <img src={GIF4} alt="GIF3" className="gif-homepage mb-[231px] ml-[300px]" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homepage;
