import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/home";
import NaoAchado from "./pages/NotFound";


export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />




                <Route path="*" element={< NaoAchado />} />
            </Routes>
        </BrowserRouter>
    );
}