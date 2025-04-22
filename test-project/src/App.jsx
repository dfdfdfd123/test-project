import PaymentCheck, {ApprovalModal} from "./layout/main/PaymentCheck.jsx";
import MainInfoPanel from "./layout/main/MainInfoPanel.jsx";
import SelectPanel from "./layout/main/SelectPanel.jsx";
import SidebarMenu from "./layout/main/SidebarMenu.jsx";
// import {useState} from "react";
import Topbar from "./layout/main/Topbar.jsx";


function App() {

    return (
        <div className="d-flex vh-100">
            <SidebarMenu />
            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <Topbar />
                <div className="p-3 overflow-auto" style={{ height: "calc(100vh - 120px)" }}>
                    <SelectPanel />
                    <MainInfoPanel />
                    <PaymentCheck />
                </div>
            </div>
        </div>
    );
}

export default App



