import { Link } from "react-router-dom";
import "./Video.css";
import BgVideo from "/video/video.mp4";
import FindOut from "/icons/FindOutBlack.svg";


const Video = () => {
    return (
        <>
            <video autoPlay loop muted playsInline className="bg-vid">
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div className="h-screen">
                <div className="flex flex-col h-full z-[9999]">
                    <div className="flex flex-col justify-end h-[30%] ml-[26px]">
                    </div>
                    <div className="h-[50%] justify-end flex flex-col z-50">
                        <Link to="/homepage" className="w-full flex justify-end">
                            <div className="bg-[#F6F3F1] w-fit p-[14px] mr-[26px] flex gap-4 cursor-pointer">
                                <span className="onboarding text-[20px] text-[#131313]">Skip</span>
                                <img src={FindOut} alt="Skip" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Video;