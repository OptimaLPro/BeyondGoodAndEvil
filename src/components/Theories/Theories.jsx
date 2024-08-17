
import { useState } from "react";
import Navbar from "../Navbar/Navbar"
import "./Theories.css"
import Coin from "/theories/Coin.svg";
import Deontology from "/theories/Deontology.svg";
import Utilitarianism from "/theories/Utilitarianism.svg";
import Virtue from "/theories/Virtue.svg";
import { theories, descTheories } from "./Data";
import CloseIcon from "/theories/desc/Close.svg";
import UtilitarianismGIF from "/theories/desc/Utilitarianism.gif";
import DeontologyGIF from "/theories/desc/Deontology.gif";
import VirtueGIF from "/theories/desc/Virtue.gif";
import CoinGIF from "/theories/desc/Coin.gif";
import CompareGlobally from "../ThankYou/CompareGlobally/CompareGlobally";

const Theories = () => {
    const [AllFourShown, setAllFourShown] = useState(true);
    const [UtilitarianismShown, setUtilitarianismShown] = useState(false);
    const [DeontologyShown, setDeontologyShown] = useState(false);
    const [VirtueShown, setVirtueShown] = useState(false);
    const [CoinShown, setCoinShown] = useState(false);
    const [theoryname, setTheoryName] = useState("Utilitarianism");

    const onClickAllFour = (theory) => {
        setTheoryName(theory);
        if (theory === "Utilitarianism") setUtilitarianismShown(true);
        if (theory === "Deontology") setDeontologyShown(true);
        if (theory === "Virtue") setVirtueShown(true);
        if (theory === "Coin") setCoinShown(true);
        setAllFourShown(false);
    }

    const closeTheory = () => {
        setUtilitarianismShown(false);
        setDeontologyShown(false);
        setVirtueShown(false);
        setCoinShown(false);
        setAllFourShown(true);
    }

    const nextTheory = () => {
        if (theoryname === "Utilitarianism") {
            setTheoryName("Deontology");
        } else if (theoryname === "Deontology") {
            setTheoryName("Virtue");
        } else if (theoryname === "Virtue") {
            setTheoryName("Coin");
        } else if (theoryname === "Coin") {
            setTheoryName("Utilitarianism");
        }
    }

    const prevTheory = () => {
        if (theoryname === "Utilitarianism") {
            setTheoryName("Coin");
        } else if (theoryname === "Deontology") {
            setTheoryName("Utilitarianism");
        } else if (theoryname === "Virtue") {
            setTheoryName("Deontology");
        } else if (theoryname === "Coin") {
            setTheoryName("Virtue");
        }
    }

    return (
        <div className=" bg-[#131313] grid-background relative">
            <div className="flex flex-col">
                <Navbar darkMode={true} />
                <div className="mx-[20px] text-[#F6F3F1] text-[38px] bold-font">Ethical Theories</div>
                <span className="mx-[20px] text-[#F6F3F1] text-[14px] bold-font mt-[-5px]">Click on a theory to know more about it</span>
                {AllFourShown && <AllFour onClickAllFour={onClickAllFour} />}
                {!AllFourShown && <MainTheory theoryname={theoryname} closeTheory={closeTheory} nextTheory={nextTheory} prevTheory={prevTheory} />}
                <span className="capitalize mx-[20px] text-[#F6F3F1] text-[20px] bold-font mt-[26px]">Compare To better understand</span>
                <div className="mx-[20px] flex flex-col gap-[7px]">
                    <span className="text-[#F6F3F1] text-[15px] regular-font mt-[3px]">
                        Ethics isn't universal. Different theories offer unique approaches to tackling moral questions. By comparing these perspectives, we can grasp the complexity of ethical decision-making.
                    </span>
                    <span className="text-[#F6F3F1] text-[15px] regular-font">
                        Let’s explore how these theories approach the same moral dilemma.
                    </span>
                </div>
                <div className="mt-[20px] bg-[#F6F3F1] mx-[20px]">
                    <div className="mx-[14px] mt-[11px] mb-[18px]">
                        <span className="text-[#131313] text-[16px] bold-font ">Example Question:</span>
                        <p className="text-[14px] text-[#131313] regular-font mt-[12px]">
                            You have developed a groundbreaking medical treatment that could save thousands of lives, but it requires using a limited resource that is essential for the survival of a small community. What do you do?
                        </p>
                    </div>
                </div>
                <div>
                    <ClickOnGif theory={theoryname} setTheoryName={setTheoryName} />
                </div>
                <div className="mx-[20px] mt-[70px] mb-[40px]">
                    <CompareGlobally />
                </div>
            </div>
        </div>
    )
}

const AllFour = ({ onClickAllFour }) => {
    return (
        <div className="flex flex-col justify-center mt-[18px]">
            <div className="flex justify-center">
                <div className="bg-[#FD9DAF] w-full h-[177px] flex ml-[20px] justify-center" onClick={() => onClickAllFour("Utilitarianism")}>
                    <img src={Utilitarianism} alt="Utilitarianism" className="mt-[8px] w-[155.09px] h-[143px]" />
                </div>
                <div className="bg-[#89CDFF] w-full h-[177px] flex mr-[20px] justify-center" onClick={() => onClickAllFour("Deontology")}>
                    <img src={Deontology} alt="Deontology" className="mt-[8px] w-[155.09px] h-[143px]" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-[#DCECA1] w-full h-[177px] flex ml-[20px] justify-center" onClick={() => onClickAllFour("Virtue")}>
                    <img src={Virtue} alt="Virtue" className="mt-[8px] w-[155.09px] h-[143px]" />
                </div>
                <div className="bg-[#FCD290] w-full h-[177px] flex mr-[20px] justify-center" onClick={() => onClickAllFour("Coin")}>
                    <img src={Coin} alt="Coin" className="mt-[8px] w-[155.09px] h-[143px]" />
                </div>
            </div>
        </div>
    );
}

const highlightText = (text, boldTextArray) => {
    if (!boldTextArray || boldTextArray.length === 0) return text;

    const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const boldTextPattern = new RegExp(`(${boldTextArray.map(escapeRegex).join('|')})`, 'gi');

    const parts = text.split(boldTextPattern);

    return parts.map((part, index) => (
        boldTextArray.includes(part) ? <span key={index} className='bold-font'>{part}</span> : part
    ));
};

const MainTheory = ({ theoryname, closeTheory, prevTheory, nextTheory }) => {
    const theory = theories.find(t => t.name === theoryname);

    return (
        <>
            <div className="flex justify-center mt-[18px]" >
                <div className="mx-[20px] w-full h-[354px] flex flex-col justify-between" style={{ background: theory.color }}>
                    <div className="flex flex-col">
                        <div className="flex justify-between px-[14px] mt-[17px]">
                            <span className="bold-font text-[20px]">{theory.name}</span>
                            <img src={CloseIcon} alt="Close" className="close-icon" onClick={closeTheory} />
                        </div>
                        <div className="px-[14px] mt-[22px]">
                            <p className="regular-font text-[20px] tracking-[0.5px] leading-[22px]">{highlightText(theory.description, theory.bold_description)}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between px-[14px] mb-[17px]">
                            <img src={theory.left} className="theory-right-left" alt="Left" onClick={prevTheory} />
                            <img src={theory.right} className="theory-right-left" alt="Right" onClick={nextTheory} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const ClickOnGif = ({ theory, setTheoryName }) => {
    const descTheory = descTheories.find(t => t.name === theory);

    const ClickOnTheory = (theory) => {
        setTheoryName(theory);
    }

    return (
        <>
            <div className="mx-[20px] mt-[30px]">
                <div>
                    <span className="bold-font text-[16px]" style={{ color: descTheory.color }}>{descTheory.description}</span>
                </div>
                <div className="flex justify-between mt-[35px]">
                    <div style={{ opacity: theory == "Utilitarianism" ? '100%' : '50%' }} className="flex items-center" onClick={() => ClickOnTheory("Utilitarianism")}>
                        <img src={UtilitarianismGIF} alt="Utilitarianism" className="gif-theories" />
                        <span className="text-[#F6F3F1] text-[14px]  ml-[3px] regular-font">Utilitarianism</span>
                    </div>
                    <div style={{ opacity: theory == "Deontology" ? '100%' : '50%' }} className="flex items-center" onClick={() => ClickOnTheory("Deontology")}>
                        <img src={DeontologyGIF} alt="Deontology" className="gif-theories" />
                        <span className="text-[#F6F3F1] text-[14px] ml-[3px] regular-font">Deontology</span>
                    </div>
                    <div style={{ opacity: theory == "Virtue" ? '100%' : '50%' }} className="flex items-center" onClick={() => ClickOnTheory("Virtue")}>
                        <img src={VirtueGIF} alt="Virtue" className="gif-theories" />
                        <span className="text-[#F6F3F1] text-[14px] ml-[3px] regular-font">Virtue</span>
                    </div>
                    <div style={{ opacity: theory == "Coin" ? '100%' : '50%' }} className="flex items-center" onClick={() => ClickOnTheory("Coin")}>
                        <img src={CoinGIF} alt="Coin" className="gif-theories" />
                        <span className="text-[#F6F3F1] text-[14px] ml-[3px] regular-font">Coin</span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}



export default Theories;