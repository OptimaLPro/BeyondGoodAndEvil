import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PopupMenu from "./PopupMenu/PopupMenu";
import "./UserData.css";
import BackIcon from "/icons/Back.svg";
import FindOut from "/icons/FindOutWhite.svg";
import BlackBox from "/rect/Blackbox.svg";
import Checkbox from "/rect/Checkbox.svg";

const UserData = () => {
    const [selectedGender, setSelectedGender] = useState(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [ageMenu, setAgeMenu] = useState(false);
    const [lifeSituationMenu, setLifeSituationMenu] = useState(false);
    const [countryMenu, setCountryMenu] = useState(false);
    const [currentCountry, setCurrentCountry] = useState("Select");
    const [currentAge, setCurrentAge] = useState("just give us a range");
    const [currentLifeSituation, setCurrentLifeSituation] = useState("Select");
    const navigateTo = useNavigate();

    const handleGenderClick = (gender) => {
        setSelectedGender(selectedGender === gender ? null : gender);
    };

    const handleAgeClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setAgeMenu(!ageMenu);
    };

    const handleLifeSituationClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setLifeSituationMenu(!lifeSituationMenu);
    }

    const handleCountryClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setCountryMenu(!countryMenu);
    }


    const checkForm = () => {
        if (selectedGender === null
            || currentAge === "just give us a range"
            || currentLifeSituation === "Select"
            || currentCountry === "Select") {
            toast.error('Please fill all the fields', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.log("Please fill all the fields");
        }
        else {
            navigateTo("/thank-you");
            console.log("Form submitted successfully");
        }
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce />

            <div className="bg-[#6CB9F1] min-h-screen">
                <div className="flex flex-col mx-[25px] text-[#131313]">
                    <div>
                        <Link to="/">
                            <img src={BackIcon} alt="Back Icon" className="back-icon mt-[25px]" />
                        </Link>
                    </div>
                    <div className="mt-[30px] w-[300px]">
                        <span className="capitalize bold-font text-[28px] leading-[30px]">Now tell us a little bit about yourself</span>
                    </div>
                    <div className="mt-[35px] w-[300px]">
                        <span className="capitalize regular-font text-[20px]">How do you identify yourself?</span>
                    </div>
                    <div className="flex-col">
                        <div className="flex gap-[77px]">
                            <div className="flex items-center align-middle gap-[10px] mt-[11px]" onClick={() => handleGenderClick('Female')}>
                                <img src={selectedGender === 'Female' ? BlackBox : Checkbox} alt="Checkbox" className="checkbox-icon" />
                                <span className="capitalize regular-font text-white text-[20px]">Female</span>
                            </div>
                            <div className="flex items-center align-middle gap-[10px] mt-[11px]" onClick={() => handleGenderClick('Male')}>
                                <img src={selectedGender === 'Male' ? BlackBox : Checkbox} alt="Checkbox" className="checkbox-icon" />
                                <span className="capitalize regular-font text-white text-[20px]">Male</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center align-middle gap-[10px] mt-[22px]" onClick={() => handleGenderClick('Other')}>
                                <img src={selectedGender === 'Other' ? BlackBox : Checkbox} alt="Checkbox" className="checkbox-icon" />
                                <span className="capitalize regular-font text-white text-[20px]">Other</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="capitalize text-[20px] regular-font mt-[40px]">How old are you?</span>
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]" onClick={handleAgeClick}>{currentAge}</span>
                        {ageMenu && <PopupMenu labels={["all ages", "17 and under", "18-24", "25-29", "30-39", "40-59", "60 and over"]} setCurrentAge={setCurrentAge} setAgeMenu={setAgeMenu} currentAge={currentAge} position={menuPosition} />}
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="capitalize text-[20px] regular-font mt-[40px]">What’s your life situation like?</span>
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]" onClick={handleLifeSituationClick}>{currentLifeSituation}</span>
                        {lifeSituationMenu && <PopupMenu labels={["any life situation", "single", "Married/coupled", "Married/coupled with children", "single parent", "divorced", "widowed"]} setCurrentAge={setCurrentLifeSituation} setAgeMenu={setLifeSituationMenu} currentAge={currentLifeSituation} position={menuPosition} />}
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="capitalize text-[20px] regular-font mt-[40px]">in what country do you live?</span>
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]" onClick={handleCountryClick}>{currentCountry}</span>
                        {countryMenu && <PopupMenu setCurrentAge={setCurrentCountry} setAgeMenu={setCountryMenu} currentAge={currentCountry} position={menuPosition} countryMenu={true} />}

                    </div>
                    <div className="w-full flex mt-[50px] mb-[40px]">
                        <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer" onClick={() => checkForm()}>
                            <span className="regular-font text-[18px] text-[#F6F3F1]">Submit</span>
                            <img src={FindOut} alt="Find Out" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserData;
