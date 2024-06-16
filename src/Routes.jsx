import React from "react";
import { Routes, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Detalhes from "./pages/Detalhes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/detalhes" element={<Detalhes />} />
        </Routes>
    );
};

export default AppRoutes;
