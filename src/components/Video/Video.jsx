import { Link } from "react-router-dom";
import "./Video.css";
import BgVideo from "/video/video2.mp4";
import FindOut from "/icons/FindOutWhite.svg";
import { useEffect, useRef, useState } from "react";
import SoundOn from "/video/SoundOn.svg";
import SoundOff from "/video/SoundOff.svg";
import OnboardingNew from "/video/OnboardingNew.mp4";
import { useNavigate } from 'react-router-dom';

const Video = () => {
    const navigate = useNavigate();
    const [muted, setMuted] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Preload the SVGs
        const preloadImage = (src) => {
            const img = new Image();
            img.src = src;
        };
        preloadImage(SoundOn);
        preloadImage(SoundOff);
    }, []);

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

    const onEnded = () => {
        navigate('/homepage');
    }



    return (
        <>
            <video ref={videoRef} autoPlay muted playsInline className="bg-vid-video" onEnded={onEnded}>
                <source src={OnboardingNew} type="video/mp4" />
            </video>
            <div className="h-screen bg-[#f5f3f1]">
                <img
                    src={muted ? SoundOff : SoundOn}
                    alt="Sound"
                    className="cursor-pointer w-[60px] h-[60px] z-[9999] absolute right-0 mr-[15px] mt-[5px]"
                    onClick={toggleMute}
                />

                <div className="flex flex-col h-full z-[9999]">
                    {/* <div className="flex flex-col justify-end h-[10%] ml-[26px]">
                    </div> */}
                    <div className="absolute bottom-0 right-0">
                        <Link to="/homepage" className="">

                            <div className="bg-[#131313] w-fit p-[14px] mr-[30px] mb-[40px] flex gap-4 cursor-pointer">

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