import React from 'react';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import MenuPage from "./pages/Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/menu" element={<MenuPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;