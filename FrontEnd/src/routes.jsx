import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/home";
import NaoAchado from "./pages/NotFound";
import Ex1 from "./pages/exercicios/Ex1";


export default function Navegar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/ex1" element={<Ex1 />} />




                <Route path="*" element={< NaoAchado />} />
            </Routes>
        </BrowserRouter>
    );
}