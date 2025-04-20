import ExecutionSummaryTable, {ApprovalModal} from "./layout/ExecutionSummaryTable.jsx";
import MainInfoPanel from "./layout/MainInfoPanel.jsx";
import FilterPanel from "./layout/FilterPanel.jsx";
import SidebarMenu from "./layout/SidebarMenu.jsx";
// import {useState} from "react";
import Topbar from "./layout/Topbar.jsx";


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



