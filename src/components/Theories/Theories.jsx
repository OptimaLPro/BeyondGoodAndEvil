
import Navbar from "../Navbar/Navbar"
import "./Theories.css"

const Theories = () => {
    return (
        <div className="h-dvh bg-[#131313] grid-background overflow-x-hidden overflow-y-hidden relative">
            <div className="flex flex-col">
                <Navbar darkMode={true} />
                <div className="mx-[20px] text-[#F6F3F1] text-[38px] bold-font">Ethical Theories</div>
                <span className="mx-[20px] text-[#F6F3F1] text-[14px] bold-font mt-[-5px]">Click on a theory to know more about it</span>
                <div className="flex flex-col">
                    <div className="flex">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theories