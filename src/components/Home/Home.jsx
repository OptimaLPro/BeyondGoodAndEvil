import "./Home.css";
import FindOut from "/Icons/FindOut.svg";

const Home = () => {
    return (
        <div className="bg-[#f5f3f1] h-screen">
            <div className="flex flex-col h-full">
                <div className="flex flex-col justify-end h-[30%] ml-[26px]">
                    <span className="home text-[43px]">Am I</span>
                    <span className="home text-[43px]">A Good</span>
                    <span className="home text-[43px]">Person?</span>
                </div>
                <div className="h-[50%] justify-end flex flex-col ml-[26px]">
                    <div className="bg-[#131313] w-fit p-[14px] flex gap-4 cursor-pointer">
                        <span className="home text-[20px] text-[#F6F3F1]">Find Out</span>
                        <img src={FindOut} alt="Find Out" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
