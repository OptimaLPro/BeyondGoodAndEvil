import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Logo from "/images/Logo.svg";
import LogoWhite from "/images/LogoWhite.svg";

const Navbar = ({ darkMode }) => {
    return (
        <>
            <div className="flex justify-between px-[20px] py-[20px]">
                <Link to="/">
                    {!darkMode && <img src={Logo} alt="logo" className="" />}
                    {darkMode && <img src={LogoWhite} alt="logo" className="" />}
                </Link>
                <Menu darkMode={darkMode} />
            </div>
        </>
    );
}

export default Navbar;