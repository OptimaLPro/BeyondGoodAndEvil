import React, { useState } from "react";
import "./UserData.css";
import BackIcon from "/icons/Back.svg";
import Checkbox from "/rect/Checkbox.svg";
import BlackBox from "/rect/Blackbox.svg";
import FindOut from "/icons/FindOutWhite.svg";
import { Link } from "react-router-dom";

const UserData = () => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderClick = (gender) => {
        setSelectedGender(selectedGender === gender ? null : gender);
    };

    return (
        <>
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
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]">just give us a range</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="capitalize text-[20px] regular-font mt-[40px]">What’s your life situation like?</span>
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]">select</span>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <span className="capitalize text-[20px] regular-font mt-[40px]">in what country do you live?</span>
                        <span className="capitalize text-[20px] text-white bold-font border-b-[1.7px] pb-2 border-black mr-[20px]">select</span>
                    </div>
                    <div className="w-full flex mt-[50px] mb-[40px]">
                        <Link to="/thank-you">
                            <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
                                <span className="regular-font text-[18px] text-[#F6F3F1]">Submit</span>
                                <img src={FindOut} alt="Find Out" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserData;
