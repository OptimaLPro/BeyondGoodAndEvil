import { Link } from "react-router-dom";
import "./Video.css";
import BgVideo from "/video/video2.mp4";
import FindOut from "/icons/FindOutWhite.svg";
import { useEffect, useRef, useState } from "react";
import SoundOn from "/video/SoundOn.svg";
import SoundOff from "/video/SoundOff.svg";

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
                <img src={muted ? SoundOff : SoundOn} alt="Sound" className="cursor-pointer w-[60px] h-[60px] z-[9999] absolute right-0 mr-1" onClick={toggleMute} />

                <div className="flex flex-col h-full z-[9999]">
                    {/* <div className="flex flex-col justify-end h-[10%] ml-[26px]">
                    </div> */}
                    <div className="absolute bottom-0 right-0">
                        <Link to="/homepage" className="">

                            <div className="bg-[#131313] w-fit p-[14px] mr-[20px] mb-[20px] flex gap-4 cursor-pointer">

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