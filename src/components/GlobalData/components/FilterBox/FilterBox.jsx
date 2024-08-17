import React, { useEffect, useState } from 'react';
import PopupMenu from '../../../UserData/PopupMenu/PopupMenu';
import { PercentData } from '../../ThoeryData';

const FilterBox = ({ setPrecentUtilitarianism, setPrecentDeontology, setPrecentVirtue, setPrecentCoin, setMenOrWomen }) => {
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [genderMenu, setGenderMenu] = useState(false);
    const [ageMenu, setAgeMenu] = useState(false);
    const [situationMenu, setSituationMenu] = useState(false);
    const [countryMenu, setCountryMenu] = useState(false);
    const [currentAge, setCurrentAge] = useState("Of All Ages");
    const [currentCountry, setCurrentCountry] = useState("All Countries");
    const [currentSituation, setCurrentSituation] = useState("In Any Life Situation");
    const [currentGender, setCurrentGender] = useState("People");
    const [modified, setModified] = useState(false);

    useEffect(() => {
        if (currentGender !== "People" || currentAge !== "Of All Ages" || currentCountry !== "All Countries" || currentSituation !== "In Any Life Situation") {
            setModified(true);
        } else {
            setModified(false);
        }

        if (currentGender === "Men") {
            setMenOrWomen("Men");
        } else if (currentGender === "Women") {
            setMenOrWomen("Women");
        }
        else {
            setMenOrWomen("Other");
        }

        const randomIndex = Math.floor(Math.random() * PercentData.length);
        const randomData = PercentData[randomIndex].data;
        setPrecentUtilitarianism(randomData[0]);
        setPrecentDeontology(randomData[1]);
        setPrecentVirtue(randomData[2]);
        setPrecentCoin(randomData[3]);
    }, [currentGender, currentAge, currentSituation, currentCountry])


    const handleAgeClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setAgeMenu(!ageMenu);
    };

    const handleCountryClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setCountryMenu(!countryMenu);
    }

    const handleSituationClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setSituationMenu(!situationMenu);
    }

    const handleGenderClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setMenuPosition({ top: rect.bottom, left: rect.left });
        setGenderMenu(!genderMenu);
    }

    const resetFilter = () => {
        setCurrentGender("People");
        setCurrentAge("Of All Ages");
        setCurrentSituation("In Any Life Situation");
        setCurrentCountry("All Countries");
        setModified(false);
    }

    return (
        <div className="bg-[#6CB9F1] mt-[12px] leading-[28px]">
            <div className="ml-[14px] pt-3 mt-[12px] w-[80%]">
                <div>
                    <span onClick={handleGenderClick} className="text-[28px] text-[#131313] bold-font underline">{currentGender}</span>
                    <span className="text-[#F6F3F1] text-[20px] regular-font"> who are</span>
                    {genderMenu && <PopupMenu labels={["People", "Women", "Men", "Others"]} setCurrentAge={setCurrentGender} setAgeMenu={setGenderMenu} currentAge={currentGender} position={menuPosition} />}

                </div>
                <div >
                    <span onClick={handleAgeClick} className="text-[28px] text-[#131313] bold-font underline">{currentAge}</span>
                    <span className="text-[#F6F3F1] text-[20px] regular-font">, and are</span>
                    {ageMenu && <PopupMenu labels={["Of All Ages", "17 and under", "18-24", "25-29", "30-39", "40-59", "60 and over"]} setCurrentAge={setCurrentAge} setAgeMenu={setAgeMenu} currentAge={currentAge} position={menuPosition} />}

                </div>
                <div >
                    <span onClick={handleSituationClick} className="text-[28px] text-[#131313] bold-font underline">{currentSituation}</span>
                    <span className="text-[#F6F3F1] text-[20px] regular-font">,</span>
                    {situationMenu && <PopupMenu labels={["In Any Life Situation", "Single", "Married/coupled", "Married/coupled with children", "Single parent", "Divorced", "Widowed"]} setCurrentAge={setCurrentSituation} setAgeMenu={setSituationMenu} currentAge={currentSituation} position={menuPosition} />}

                </div>
                <div className='flex flex-col'>
                    <div>
                        <span className="text-[#F6F3F1] text-[20px] regular-font">from </span>
                        <span onClick={handleCountryClick} className="text-[28px] text-[#131313] bold-font underline">{currentCountry}</span>
                        <span className="text-[#F6F3F1] text-[20px] regular-font">,</span>
                    </div>
                    <div>
                        <span className="text-[#F6F3F1] text-[20px] regular-font">on average.</span>
                    </div>
                    {countryMenu && <PopupMenu setCurrentAge={setCurrentCountry} setAgeMenu={setCountryMenu} currentAge={currentCountry} position={menuPosition} countryMenu={true} />}
                </div>

            </div>
            <div className="w-full text-right pb-2 mb-[15px]">
                {!modified && <span className="text-[#F6F3F1] text-[12px] regular-font mr-[15px]">Click on any text line to filter</span>}
                {modified && <span onClick={resetFilter} className=" underline text-[#F6F3F1] text-[12px] regular-font mr-[15px]">Reset filter</span>}
            </div>
        </div>
    )
}

export default FilterBox