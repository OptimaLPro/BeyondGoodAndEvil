import Navbar from "../Navbar/Navbar";
import "./About.css";
import Card from "/about/Card.png";
import SendQuestionWhite from "/icons/SendQuestionWhite.png";

const handleShare = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this question!',
            url: `https://beyondgoodandevil.vercel.app`
        })
            .then(() => {
            })
            .catch((error) => {
                // alert('Nothing shared: ' + error.message);
            });
    } else {
        // alert('Web Share API not supported in this browser');
    }
};

const About = () => {
    return (
        <>
            <div className="h-screen grid2-background">
                <div className="flex flex-col">
                    <Navbar />
                    <div className="mx-[20px] leading-[35px] mt-[14px]">
                        <span className="text-[42px] bold-font text-[#131313] capitalize">about ‘Beyond good & evil’</span>
                    </div>
                    <div className="text-[20px] regular-font text-[#131313] mt-5 mx-5">
                        <p>
                            Welcome to Beyond Good & Evil, where you explore the depths of your moral compass. Face thought-provoking scenarios and discover which ethical theories align with your choices.
                        </p>
                        <p className="mt-6">
                            We aim to highlight the diversity of moral perspectives, showing that ethical decisions are shaped by individual backgrounds and
                            cultural contexts.
                        </p>
                        <p className="mt-6">
                            Our goal is to encourage the development of critical thinking skills and self-awareness, enabling users to reflect on their moral choices.
                        </p>
                        <div>
                            <img src={Card} alt="Card" className="w-full mt-5" />
                        </div>
                        <div className="my-[31px]">
                            <div className="bg-[#6CB9F1] flex flex-col">
                                <span className="ml-[25px] mt-4 text-[20px] bold-font text-[#131313]">Share Beyond Good & Evil</span>
                                <span className="ml-[25px] text-[14px] text-[#131313] regular-font">Invite your friends and family to explore their own moral perspectives.</span>
                                <div className="ml-[25px] mt-[15px] mb-[21px]">
                                    <div
                                        className="bg-[#DCECA1] w-fit p-[14px] flex cursor-pointer border-black border-2"
                                        onClick={handleShare}
                                    >
                                        <span className="bold-font text-[14px] text-[#131313]">Share Us</span>
                                        <img src={SendQuestionWhite} alt="SendQuestionWhite" className='send-question mt-[2px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
