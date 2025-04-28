
// Inventory.jsx
import SidebarMenu from "../SidebarMenu.jsx";
import Topbar from "../Topbar.jsx";
import HQPanel1 from "./LogisStatus/HQPanel1.jsx";
import HQPanel2 from "./LogisStatus/HQPanel2.jsx";
import LogisSelect from "./LogisManage/LogisSelect.jsx";
import DeliveryTable from "./LogisManage/DeliveryTable.jsx";

function Inventory() {
    const menuItems = [
        { text: "물류 현황", link: "/test" },
        { text: "물류 재고관리", link: "/inv" }
    ];

    const breadcrumb = "☆ 물류 관리 > 물류 재고관리"; // Change this as needed
    const panelTitle = "물류 재고관리"; // Change this as needed

    return (
        <div className="d-flex vh-100">
            <SidebarMenu menuItems={menuItems} />
            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <Topbar title="물류 재고관리" />
                <div className="p-3 overflow-auto" style={{ height: "calc(100vh - 120px)" }}>
                    <HQPanel1 breadcrumb={breadcrumb} panelTitle={panelTitle} />
                    <LogisSelect/>
                   <DeliveryTable/>
                </div>
            </div>
        </div>
    );
}

export default Inventory;


// import SidebarMenu from "../SidebarMenu.jsx";
// import Topbar from "../Topbar.jsx";
// import HQPanel1 from "./HQPanel1.jsx";
// import HQPanel2 from "./HQPanel2.jsx";
//
//
// function Inventory() {
//     const menuItems = ["물류 현황", "물류 재고관리"];
//
//     return (
//         <div className="d-flex vh-100">
//             <SidebarMenu menuItems={menuItems}/>
//             <div className="flex-grow-1 d-flex flex-column overflow-hidden">
//                 <Topbar title="물류 재고관리"/>
//                 <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
//                     <HQPanel1/>
//                     <HQPanel2/>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
//
// export default Inventory

