import GIF1 from "/thankyou/gif/1.gif";
import GIF2 from "/thankyou/gif/2.gif";
import GIF3 from "/thankyou/gif/3.gif";
import FindOutWhite from "/icons/FindOutWhite.svg";
import PixelArt from "/thankyou/PixelArt.svg";
import { Link } from "react-router-dom";

const CompareGlobally = () => {
    return (
        <div className="bg-[#FA839F] pt-[12px] w-full mt-[15px] flex flex-col relative">
            <div className="mx-[14px]">
                <div className="flex flex-col">
                    <span className="bold-font text-white text-[20px]">Compare Globally</span>
                    <span className="regular-font text-white text-[14px] w-[220px] leading-4">See how your choices compare to others around the world</span>
                </div>

                <Link to="/global-data" >
                    <div className="bg-[#131313] w-fit p-[14px] flex gap-[8px] cursor-pointer mt-[15px]">
                        <span className="capitalize bold-font text-[14px] text-[#F6F3F1]">see global data</span>
                        <img src={FindOutWhite} alt="Find Out" />
                    </div>
                </Link>
            </div>
            <div>
                <img src={PixelArt} alt="Pixel Art" className="w-full mt-[12px]" />
            </div>
            <div>
                <img src={GIF1} alt="GIF1" className="mb-[76px] ml-[81px] gif " />
                <img src={GIF2} alt="GIF2" className="mb-[150px] ml-[218px] gif " />
                <img src={GIF3} alt="GIF3" className="mb-[70px] ml-[285px] gif " />
            </div>
        </div>
    )
}

export default CompareGlobally