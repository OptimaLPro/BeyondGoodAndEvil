import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";
import BurgerMenu from "/icons/BurgerMenu.svg";
import BackIcon from "/icons/Back.svg";
import PinkNext from "/icons/PinkNext.svg";
import OrangeNext from "/icons/OrangeNext.svg";
import GreenNext from "/icons/GreenNext.svg";
import BlueNext from "/icons/BlueNext.svg";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div>
                <img 
                    src={BurgerMenu} 
                    alt="burger menu" 
                    className="cursor-pointer" 
                    onClick={toggleMenu}
                />
                {isOpen && (
                    <motion.div 
                        initial={{ y: 0, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1 }} 
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bg-black mr-[20px] mt-[12px] w-[251px] h-[268px] right-0 drop-shadow-lg"
                    >
                        <div className="divide-y-2 divide-white flex flex-col">
                            <div className="flex cursor-pointer p-[14px]">
                                <img src={BackIcon} alt="Back Icon" className="mr-[19px]" />
                                <div className="text-[#F6F3F1] bold-font">Home Page</div>
                            </div>
                            <div className="flex cursor-pointer p-[14px] flex-row-">
                                <div className="text-[#FD9DAF] bold-font ml-[30px]">Answer Questionary</div>
                                <img src={PinkNext} alt="Back Icon" className="ml-[19px]" />
                            </div>
                            <div className="flex cursor-pointer p-[14px] flex-row-">
                                <div className="text-[#FCD290] bold-font ml-[30px]">Global Data</div>
                                <img src={OrangeNext} alt="Back Icon" className="ml-[19px]" />
                            </div>
                            <div className="flex cursor-pointer p-[14px] flex-row-">
                                <div className="text-[#DCECA1] bold-font ml-[30px]">Ethical Theories</div>
                                <img src={GreenNext} alt="Back Icon" className="ml-[19px]" />
                            </div>
                            <div className="flex cursor-pointer p-[14px] flex-row-">
                                <div className="text-[#89CDFF] bold-font ml-[30px]">About</div>
                                <img src={BlueNext} alt="Back Icon" className="ml-[19px]" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Menu;
