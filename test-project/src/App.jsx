import ExecutionSummaryTable, {ApprovalModal} from "./layout/main/ExecutionSummaryTable.jsx";
import MainInfoPanel from "./layout/main/MainInfoPanel.jsx";
import FilterPanel from "./layout/main/FilterPanel.jsx";
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
                    <FilterPanel />
                    <MainInfoPanel />
                    <ExecutionSummaryTable />
                </div>
            </div>
        </div>
    );
}

export default App



