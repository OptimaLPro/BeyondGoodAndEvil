import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Logo from "/images/Logo.svg";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between px-[20px] py-[11px]">
                <Link to="/">
                    <img src={Logo} alt="logo" className="" />
                </Link>
                <Menu />
            </div>
        </>
    );
}

export default Navbar;