import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./GlobalData.css";
import FilterBox from "./components/FilterBox/FilterBox";
import ShowGifs from "./components/ShowGifs/ShowGifs";

const GlobalData = () => {
    const [filterBy, setFilterBy] = useState("theory")
    const [precentUtilitarianism, setPrecentUtilitarianism] = useState(25)
    const [precentDeontology, setPrecentDeontology] = useState(25)
    const [precentVirtue, setPrecentVirtue] = useState(25)
    const [precentCoin, setPrecentCoin] = useState(25)
    const [menOrWomen, setMenOrWomen] = useState("Other");

    return (
        <div className="h-screen grid2-background">
            <div className="flex flex-col">
                <Navbar />
                <div className="flex flex-col mx-5 leading-[25px] mt-5">
                    <div>
                        <span className="capitalize text-[38px] text-[#131313] bold-font">Global data</span>
                    </div>
                    <div>
                        <span className="text-[14px] text-[#131313] regular-font">Explore choices of other humans</span>
                    </div>
                    <div className="flex text-center border-2 border-black divide-x-2 divide-black mt-[17px]">
                        <div className="w-1/2 p-[6px] text-[16px] bold-font" onClick={() => setFilterBy("theory")} style={{ backgroundColor: filterBy == "theory" ? '#FA839F' : '' }}>
                            <span style={{ color: filterBy == "theory" ? 'white' : '#131313' }}>By Theory</span>
                        </div>
                        <div className="w-1/2 p-[6px] text-[16px] bold-font" onClick={() => setFilterBy("question")} style={{ backgroundColor: filterBy == "question" ? '#FA839F' : '' }}>
                            <span style={{ color: filterBy == "question" ? 'white' : '#131313' }}>By Question</span>
                        </div>
                    </div>
                    <div>
                        <FilterBox setPrecentUtilitarianism={setPrecentUtilitarianism} setPrecentDeontology={setPrecentDeontology} setPrecentVirtue={setPrecentVirtue} setPrecentCoin={setPrecentCoin} setMenOrWomen={setMenOrWomen} />
                    </div>
                    <div>
                        <ShowPrecentage precentUtilitarianism={precentUtilitarianism} precentDeontology={precentDeontology} precentVirtue={precentVirtue} precentCoin={precentCoin} />
                    </div>
                    <div className="mt-[20px]">
                        <ShowGifs precentUtilitarianism={precentUtilitarianism} precentDeontology={precentDeontology} precentVirtue={precentVirtue} precentCoin={precentCoin} menOrWomen={menOrWomen} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const ShowPrecentage = ({ precentUtilitarianism, precentDeontology, precentVirtue, precentCoin }) => {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="w-[15px] h-[15px] bg-[#FD9DAF] border-[1px] border-[#131313] " />
                        <span className="text-[#131313] bold-font text-[12px] ml-[3px]">Utilitarianism</span>
                    </div>
                    <div className="w-full">
                        <span className="text-[#131313] regular-font text-[20px]">{precentUtilitarianism}%</span>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="w-[15px] h-[15px] bg-[#89CDFF] border-[1px] border-[#131313] " />
                        <span className="text-[#131313] bold-font text-[12px] ml-[3px]">Deontology</span>
                    </div>
                    <div className="w-full">
                        <span className="text-[#131313] regular-font text-[20px]">{precentDeontology}%</span>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="w-[15px] h-[15px] bg-[#DCECA1] border-[1px] border-[#131313] " />
                        <span className="text-[#131313] bold-font text-[12px] ml-[3px]">Virtue</span>
                    </div>
                    <div className="w-full">
                        <span className="text-[#131313] regular-font text-[20px]">{precentVirtue}%</span>
                    </div>

                </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div className="w-[15px] h-[15px] bg-[#FCD290] border-[1px] border-[#131313] " />
                        <span className="text-[#131313] bold-font text-[12px] ml-[3px]">Coin</span>
                    </div>
                    <div className="w-full">
                        <span className="text-[#131313] regular-font text-[20px]">{precentCoin}%</span>
                    </div>

                </div>
            </div>
        </>
    );
}


export default GlobalData