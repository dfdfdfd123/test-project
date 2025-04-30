
// Inventory.jsx
import SidebarMenu from "../../SidebarMenu.jsx";
import Topbar from "../../Topbar.jsx";
import Title from "../Title.jsx";
import LogisSelect from "./LogisSelect.jsx";
import DeliveryTable from "./DeliveryTable.jsx";

function Inventory() {
    const menuItems = [
        { text: "물류 현황", link: "/logis" },
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
                    <Title breadcrumb={breadcrumb} panelTitle={panelTitle} />
                    <LogisSelect/>
                   <DeliveryTable/>
                </div>
            </div>
        </div>
    );
}

export default Inventory;


//     const menuItems = ["물류 현황", "물류 재고관리"];


