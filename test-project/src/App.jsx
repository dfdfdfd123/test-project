import ExecutionSummaryTable, {ApprovalModal} from "./layout/ExecutionSummaryTable.jsx";
import MainInfoPanel from "./layout/MainInfoPanel.jsx";
import FilterPanel from "./layout/FilterPanel.jsx";
import SidebarMenu from "./layout/SidebarMenu.jsx";
import {useState} from "react";
import Topbar from "./layout/Topbar.jsx";


function App() {


    const [showApprovalModal, setShowApprovalModal] = useState(false);

    const handleOpenModal = () => setShowApprovalModal(true);
    const handleCloseModal = () => setShowApprovalModal(false);

    return (
        <div className="d-flex vh-100">
            <SidebarMenu />
            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <Topbar />

                {/* 상단 제목 및 위치 정보 */}
                <div className="bg-white border-bottom py-2 px-4">
                    {/*<h5 className="fw-bold mb-1">계약실적관리</h5>*/}
                    <div className="text-muted small">☆ 계약관리 &gt; 계약실적관리</div>
                </div>

                <div className="p-3 overflow-auto" style={{ height: "calc(100vh - 120px)" }}>
                    <FilterPanel />
                    <MainInfoPanel />
                    <ExecutionSummaryTable />
                    <div className="mt-3 text-end">
                        <button className="btn btn-warning" onClick={handleOpenModal}>결재</button>
                    </div>
                </div>
            </div>

            {showApprovalModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                    <ApprovalModal />
                    <button className="position-absolute top-0 end-0 m-3 btn btn-outline-light" onClick={handleCloseModal}>X</button>
                </div>
            )}
        </div>
    );
}

export default App








// const [showApprovalModal, setShowApprovalModal] = useState(false);
//
// const handleOpenModal = () => setShowApprovalModal(true);
// const handleCloseModal = () => setShowApprovalModal(false);
//
// return (
//     <div className="d-flex vh-100">
//         <SidebarMenu />
//         <div className="flex-grow-1 d-flex flex-column overflow-hidden">
//             <Topbar />
//             <div className="p-3 overflow-auto" style={{ height: "calc(100vh - 60px)" }}>
//                 <FilterPanel />
//                 <MainInfoPanel />
//                 <ExecutionSummaryTable />
//                 <div className="mt-3 text-end">
//                     <button className="btn btn-warning" onClick={handleOpenModal}>결재</button>
//                 </div>
//             </div>
//         </div>
//
//         {showApprovalModal && (
//             <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
//                 <ApprovalModal />
//                 <button className="position-absolute top-0 end-0 m-3 btn btn-outline-light" onClick={handleCloseModal}>X</button>
//             </div>
//         )}
//     </div>
// );
