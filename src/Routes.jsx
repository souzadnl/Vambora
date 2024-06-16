import React from "react";
import { Routes, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reserva" element={<Reserva />} />
        </Routes>
    );
};

export default AppRoutes;
