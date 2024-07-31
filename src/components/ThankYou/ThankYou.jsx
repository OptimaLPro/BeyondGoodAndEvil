import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FindOutBlack from "/icons/FindOutBlack.svg";
import SendQuestionWhite from "/icons/SendQuestionWhite.png";
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

const ThankYou = () => {
    return (
        <>
            <div className="blue-gradient-bg">
                <div className="flex flex-col">
                    <Navbar />
                    <div className="flex flex-col gap-4 mt-[25px] px-[20px] w-[85%]">
                        <span className="capitalize bold-font text-[28px] leading-[30px]">Thank you human n. 20895 for joining our global data</span>
                    </div>
                    <div className="mx-[20px] ">
                        {/* <div className="bg-[#F6F3F1] py-[12px] w-full mt-[13px] border-black border-2">
                            <div className="mx-[14px]">
                                <span className="regular-font text-[16px]">Based on your answers, here's how you align with different ethical theories:</span>
                                <img src={Utilitarianism} alt="Utilitarianism" className="mt-[20px]" />
                                <img src={Deontology} alt="Deontology" />
                                <img src={Virtue} alt="Virtue" />
                                <img src={Coin} alt="Coin" />
                                <Link to="/ethical-theories">
                                    <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer mt-[20px]">
                                        <span className="regular-font text-[14px] capitalize text-[#F6F3F1]">Explore ethical theories</span>
                                        <img src={FindOut} alt="Find Out" />
                                    </div>
                                </Link>
                            </div>
                        </div> */}
                        <div className="bg-[#F6F3F1] flex flex-col justify-end py-[12px] mt-[13px] w-full h-[345px]" style={{ backgroundImage: `url(${Background})` }}>
                            <div className="mx-[14px]">
                                <div className="flex justify-center scale-[1.07]">
                                    <img src={randomUrl()} alt="Utilitarianism" className="mt-[20px]" />
                                </div>
                                <Link to="/ethical-theories">
                                    <div className="bg-[#F6F3F1] w-fit p-[14px] flex gap-[8px] cursor-pointer mt-[35px]">
                                        <span className="bold-font text-[14px] capitalize text-[#131313]">Know more</span>
                                        <img src={FindOutBlack} alt="Find Out" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-[20px]">
                        <CompareGlobally />
                    </div>
                    <div>
                        <div className="flex h-[57px] mt-[50px] justify-center items-center w-full bg-[#DCECA1]">
                            <img src={SendQuestionWhite} alt="Send Question White" className=" w-[83px] h-[29px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ThankYou;