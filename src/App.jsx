import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
}

export default App;
