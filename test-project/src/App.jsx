// import PaymentCheck, {ApprovalModal} from "./layout/main/PaymentCheck.jsx";
import MainInfoPanel from "./layout/main/MainInfoPanel.jsx";
import SelectPanel from "./layout/main/SelectPanel.jsx";
import SidebarMenu from "./layout/main/SidebarMenu.jsx";
// import {useState} from "react";
import Topbar from "./layout/main/Topbar.jsx";
import Agency from "./layout/agency/Agency.jsx";
import {BrowserRouter, Route, Routes }  from "react-router-dom";
import Home from "./layout/main/Home.jsx";
import Login from "./layout/Login.jsx";
import Logis from "./layout/main/Logistics/LogisStatus/Logis.jsx";
import Inventory from "./layout/main/Logistics/LogisManage/Inventory.jsx";

function App() {

    return (


    <BrowserRouter>
        {/* 페이지별 라우팅 */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agency" element={<Agency />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logis" element={<Logis />} />
            <Route path="/inv" element={<Inventory />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App



