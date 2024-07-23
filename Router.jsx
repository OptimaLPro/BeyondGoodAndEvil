import { Route, Routes } from "react-router-dom";
import Onboarding from "./src/components/Onboarding/Onboarding";
import Video from "./src/components/Video/Video";
import Homepage from "./src/components/Homepage/Homepage";
import BeforeAsnwering from "./src/components/Homepage/BeforeAsnwering/BeforeAsnwering";
import QuestionCards from "./src/components/QuestionCards/QuestionCards";
import UserData from "./src/components/UserData/UserData";
import ThankYou from "./src/components/ThankYou/ThankYou";
import TransitionSlide from "./src/components/QuestionCards/TransitionSlides/TransitionSlide";
import CardsData from './src/components/QuestionCards/Data';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Onboarding />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/video" element={<Video />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/before-answering" element={<BeforeAsnwering />} />
                <Route path="/question-cards" element={<QuestionCards CardsData={CardsData} />} />
                <Route path="/user-data" element={<UserData />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="*" element={<Onboarding />} />
                <Route path="/transition-slide" element={<TransitionSlide />} />
                <Route path="/question-cards/:cardID" element={<QuestionCards CardsData={CardsData} />} />
            </Routes>
        </>
    );
}

export default Router;