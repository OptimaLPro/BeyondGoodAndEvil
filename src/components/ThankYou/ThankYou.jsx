import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FindOutBlack from "/icons/FindOutBlack.svg";
import SendQuestionWhite from "/icons/SendQuestionWhite.svg";
import Coin from "/thankyou/Coin.svg";
import Deontology from "/thankyou/Deontology.svg";
import Utilitarianism from "/thankyou/Utilitarianism.svg";
import Virtue from "/thankyou/Virtue.svg";
import UtilitarianismPre from "/thankyou/percentage/Utilitarianism.svg";
import DeontologyPre from "/thankyou/percentage/Deontology.svg";
import VirtuePre from "/thankyou/percentage/Virtue.svg";
import CoinPre from "/thankyou/percentage/Coin.svg";
import Background from "/thankyou/percentage/Background.svg";
import "./ThankYou.css";
import CompareGlobally from "./CompareGlobally/CompareGlobally";

const randomUrl = () => {
    const urls = [UtilitarianismPre, DeontologyPre, VirtuePre, CoinPre];
    return urls[Math.floor(Math.random() * urls.length)];
}

const handleShare = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Beyond Food & Evil',
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

const ThankYou = () => {
    return (
        <>
            <div className="blue-gradient-bg">
                <div className="flex flex-col">
                    <Navbar />
                    <div className="flex flex-col gap-0 mt-[25px] pl-[20px] pb-[20px] mr-[55px]">
                        <span className="capitalize bold-font text-[28px] leading-[30px]">Thank you human</span>
                        <span className="capitalize bold-font text-[28px] leading-[30px]">n. 209348 for joining</span>
                        <span className="capitalize bold-font text-[28px] leading-[30px] ">our global data</span>
                    </div>
                    <div className="mx-[20px] ">
                        <div className="bg-[#F6F3F1] flex flex-col justify-between pb-[5px] mt-[13px] w-full h-[345px]" style={{ backgroundImage: `url(${Background})` }}>
                            <div className="mx-[14px]">
                                <div className="flex justify-center scale-[1.07]">
                                    <img src={randomUrl()} alt="Utilitarianism" className="mt-[10px] p-[10px]" />
                                </div>
                            </div>
                            <div className="mx-[20px] mb-[20px]">
                                <Link to="/ethical-theories">
                                    <div className="bg-[#F6F3F1] w-fit p-[14px] flex gap-[8px] cursor-pointer mt-[20px]">
                                        <span className="bold-font text-[14px] capitalize text-[#131313]">Know more</span>
                                        <img src={FindOutBlack} alt="Find Out" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-[20px] mb-[80px]">
                        <CompareGlobally />
                    </div>
                    <div className="fixed bottom-0 w-full z-[999]">
                        <div onClick={handleShare} className="flex h-[57px] mt-[50px] justify-center items-center w-full bg-[#DCECA1]">
                            <img src={SendQuestionWhite} alt="Send Question White" className=" w-[83px] h-[29px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThankYou;