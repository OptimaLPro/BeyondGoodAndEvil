import { useEffect, useRef, useState } from "react";
import Checked from "/icons/Checked.svg";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import { countries } from './Countries'; // Ensure this path is correct
import Search from "/icons/Search.png";

const PopupMenu = ({ labels = [], setCurrentAge, setAgeMenu, currentAge, position, countryMenu }) => {
    const [checkedLabel, setCheckedLabel] = useState(null);
    const [menuStyle, setMenuStyle] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const menuRef = useRef(null);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const menuHeight = countryMenu ? 52 + 53.6 + 61.6 * 3 : labels.length * 54;

        if (position.top + menuHeight > viewportHeight) {
            setMenuStyle({ top: 'auto', bottom: viewportHeight - position.top + 'px', left: position.left + 'px' });
        } else {
            setMenuStyle({ top: position.top + 'px', left: position.left + 'px' });
        }
    }, [position, countryMenu, labels.length]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setAgeMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    const onClickHandler = (label) => {
        setCurrentAge(label);
        setAgeMenu(false);
        setCheckedLabel(label);
    };

    const onClickCountryHandler = (countryname) => {
        setCurrentAge(countryname);
        setAgeMenu(false);
        setCheckedLabel(countryname);
    };

    return (
        <motion.div
            ref={menuRef}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={menuStyle}
            className="absolute bg-[#f6f3f1] w-[251px] flex flex-col shadow-lg text-[#131313] divide-y-2 divide-[#131313] max-h-[352px] overflow-y-auto z-[999]">
            {countryMenu ? countryPopupMenu({ countries, currentAge, onClickCountryHandler, searchTerm, setSearchTerm }) : regularPopupMenu({ labels, currentAge, onClickHandler })}
        </motion.div>
    );
};

const regularPopupMenu = ({ labels, currentAge, onClickHandler }) => {
    return (
        <>
            {labels.map((label, index) => (
                <div key={index} className="p-[14px] flex">
                    <div className="flex items-center">
                        {currentAge === label && <img src={Checked} alt="Checkbox" className="checked-icon" />}
                    </div>
                    <span className="capitalize text-[16px] regular-font ml-[14px]" onClick={() => onClickHandler(label)}>{label}</span>
                </div>
            ))}
        </>
    );
};

const countryPopupMenu = ({ countries, onClickCountryHandler, currentAge, searchTerm, setSearchTerm }) => {
    const filteredCountries = (countries && countries.length)
        ? countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : [];

    const fillers = new Array(Math.max(0, 5 - filteredCountries.length)).fill(null);

    return (
        <>
            <div key={-1} className="p-[14px] flex">
                <div className="flex items-center">
                    {currentAge === "All Countries" && <img src={Checked} alt="Checkbox" className="checked-icon" />}
                </div>
                <span className="capitalize text-[16px] regular-font ml-[14px]" onClick={() => onClickCountryHandler("All Countries")}>All Countries</span>
            </div>
            <div key={-2} className="p-[14px] flex items-center">
                <div className="flex items-center">
                    <img src={Search} alt="Search Icon" className="search-icon" />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="ml-[14px] text-[16px] regular-font bg-transparent text-[#6CB9F1] "
                />
            </div>
            {filteredCountries.map((country, index) => (
                <div key={index} className="py-[10px] px-[14px] flex items-center">
                    <div className="flex">
                        <ReactCountryFlag
                            countryCode={country.code}
                            svg
                            style={{ width: '40px', height: '40px' }}
                            title={country.name}
                            onClick={() => onClickCountryHandler(country.name)}
                        />
                    </div>
                    <div className="w-full">
                        <span className="capitalize text-[16px] regular-font ml-[14px]" onClick={() => onClickCountryHandler(country.name)}>{country.name}</span>
                    </div>
                </div>
            ))}
            {fillers.map((_, index) => (
                <div key={`filler-${index}`} className="py-[10px] px-[14px] flex items-center">
                    <div className="flex items-center">
                        <div style={{ width: '40px', height: '40px' }} />
                    </div>
                    <span className="capitalize text-[16px] regular-font ml-[14px]"></span>
                </div>
            ))}
        </>
    );
};

export default PopupMenu;
