import { Link } from "react-router-dom";
import "./Video.css";
import BgVideo from "/video/video2.mp4";
import FindOut from "/icons/FindOutWhite.svg";
import { useEffect, useRef, useState } from "react";


const Video = () => {
    const [muted, setMuted] = useState(false);
    const videoRef = useRef(null);

    const toggleMute = () => {
        const video = videoRef.current;
        if (video) {
            video.muted = !video.muted;
            setMuted(video.muted);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = muted;
        }
    }, [muted]);


    return (
        <>
            <video ref={videoRef} autoPlay loop muted playsInline className="bg-vid">
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div className="h-screen">

                <div className="flex flex-col h-full z-[9999]">
                    <div className="flex flex-col justify-end h-[30%] ml-[26px]">
                    </div>
                    <div className="h-[65%] justify-end flex flex-col z-50">
                        {/* <span onClick={toggleMute} className="text-white mute-button">
                            {muted ? "Unmute" : "Mute"}
                        </span> */}
                        <Link to="/homepage" className="flex justify-end w-full">

                            <div className="bg-[#131313] w-fit p-[14px] mr-[26px] flex gap-4 cursor-pointer">

                                <span className="onboarding text-[20px] text-[#F6F3F1]">Skip</span>
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