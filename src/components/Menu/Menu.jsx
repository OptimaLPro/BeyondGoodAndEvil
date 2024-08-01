import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Menu.css";
import BurgerMenu from "/icons/BurgerMenu.svg";
import BurgerMenuWhite from "/icons/BurgerMenuWhite.svg";
import BackIcon from "/icons/Back.svg";
import PinkNext from "/icons/PinkNext.svg";
import OrangeNext from "/icons/OrangeNext.svg";
import GreenNext from "/icons/GreenNext.svg";
import BlueNext from "/icons/BlueNext.svg";
import { Link } from "react-router-dom";

const Menu = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerIconRef = useRef(null); // Reference for the burger icon

    const toggleMenu = (event) => {
        // Prevents the menu from closing and then immediately reopening
        if (burgerIconRef.current && burgerIconRef.current.contains(event.target) && isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target) && !burgerIconRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <div className="z-[999]">
                {!darkMode && <img
                    src={BurgerMenu}
                    alt="burger menu"
                    className="cursor-pointer"
                    onClick={toggleMenu}
                    ref={burgerIconRef} // Assign the ref here
                />}
                {darkMode && <img
                    src={BurgerMenuWhite}
                    alt="burger menu"
                    className="cursor-pointer"
                    onClick={toggleMenu}
                    ref={burgerIconRef} // Assign the ref here
                />}
                {isOpen && (
                    <motion.div
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bg-black mr-[20px] mt-[12px] w-[251px] h-[268px] right-0 drop-shadow-lg"
                        ref={menuRef}
                    >
                        <div className="flex flex-col divide-y-2 divide-white">
                            <Link to="/homepage">
                                <div className="flex cursor-pointer p-[14px]">
                                    <img src={BackIcon} alt="Back Icon" className="mr-[19px]" />
                                    <div className="text-[#F6F3F1] bold-font">Home Page</div>
                                </div>
                            </Link>
                            <Link to="/before-answering">
                                <div className="flex cursor-pointer p-[14px] flex-row-">
                                    <div className="text-[#FD9DAF] bold-font ml-[30px]">Answer Questionary</div>
                                    <img src={PinkNext} alt="Pink Next Icon" className="ml-[19px]" />
                                </div>
                            </Link>
                            <Link to="/global-data">
                                <div className="flex cursor-pointer p-[14px] flex-row-">
                                    <div className="text-[#FCD290] bold-font ml-[30px]">Global Data</div>
                                    <img src={OrangeNext} alt="Orange Next Icon" className="ml-[19px]" />
                                </div>
                            </Link>
                            <Link to="/ethical-theories">
                                <div className="flex cursor-pointer p-[14px] flex-row-">
                                    <div className="text-[#DCECA1] bold-font ml-[30px]">Ethical Theories</div>
                                    <img src={GreenNext} alt="Green Next Icon" className="ml-[19px]" />
                                </div>
                            </Link>
                            <Link to="/about">
                                <div className="flex cursor-pointer p-[14px] flex-row-">
                                    <div className="text-[#89CDFF] bold-font ml-[30px]">About</div>
                                    <img src={BlueNext} alt="Blue Next Icon" className="ml-[19px]" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Menu;