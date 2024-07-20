import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import FindOut from "/icons/FindOutWhite.svg";
import SendQuestionWhite from "/icons/SendQuestionWhite.png";
import Coin from "/thankyou/Coin.svg";
import Deontology from "/thankyou/Deontology.svg";
import PixelArt from "/thankyou/PixelArt.svg";
import Utilitarianism from "/thankyou/Utilitarianism.svg";
import Virtue from "/thankyou/Virtue.svg";

const ThankYou = () => {
    return (
        <>
            <div className="blue-gradient-bg">
                <div className="flex flex-col">
                    <Navbar />
                    <div className="flex flex-col gap-4 mt-[25px] px-[20px] w-[85%]">
                        <span className="capitalize bold-font text-[28px] leading-[30px]">Thank you human n. 20895 for joining our global data</span>
                    </div>
                    <div className="mx-[20px]">
                        <div className="bg-[#F6F3F1] py-[12px] w-full mt-[13px] border-black border-2">
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
                        </div>
                    </div>
                    <div className="mx-[20px]">
                        <div className="bg-[#FA839F] py-[12px] w-full mt-[15px] flex flex-col">
                            <div className="mx-[14px]">
                                <div className="flex flex-col capitalize">
                                    <span className="bold-font text-white text-[20px]">Compare Globally</span>
                                    <span className="regular-font text-white text-[14px] w-[220px]">See how your choices compare to others around the world</span>
                                </div>

                                <Link to="/global-data" >
                                    <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer mt-[20px]">
                                        <span className="capitalize regular-font text-[12px] text-[#F6F3F1]">see global data</span>
                                        <img src={FindOut} alt="Find Out" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <img src={PixelArt} alt="Pixel Art" className="w-full mt-[12px]" />
                            </div>
                        </div>
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