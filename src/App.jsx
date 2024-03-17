import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/PersonalWebsite/" element={<Home />} />
            <Route path="/PersonalWebsite/Portfolio" element={<Portfolio />} />
        </Routes>
    );
}

export default App;
