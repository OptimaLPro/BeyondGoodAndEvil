import { Route, Routes } from "react-router-dom";
import Onboarding from "./src/components/Onboarding/Onboarding";
import Video from "./src/components/Video/Video";
import Homepage from "./src/components/Homepage/Homepage";
import BeforeAsnwering from "./src/components/Homepage/BeforeAsnwering/BeforeAsnwering";
import QuestionCards from "./src/components/QuestionCards/QuestionCards";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/video" element={<Video />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/before-answering" element={<BeforeAsnwering />} />
                <Route path="/question-cards" element={<QuestionCards />} />
            </Routes>
        </>
    );
}

export default Router;