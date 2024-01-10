import React from "react";
import {Routes, Route } from "react-router-dom";
import App from "./App";
import ThankYouPage from "./pages/ThankYouPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<App/>} />
            <Route path='/thank-you' element={<ThankYouPage/>} />
        </Routes>
    );
};

export default AppRoutes;
