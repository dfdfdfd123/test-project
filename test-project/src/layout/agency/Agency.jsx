import SidebarMenu from "../main/SidebarMenu.jsx";
import Topbar from "../main/Topbar.jsx";

function Agency() {
    const menuItems = ["주문 내역"];

    return (
        <div className="d-flex vh-100">
            <SidebarMenu menuItems={menuItems}/>
            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <Topbar title="주문내역"/>
                <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
                    {/* 여기에 Agency 전용 내용 추가 */}
                </div>
            </div>
        </div>
    );
}

export default Agency;


// import SidebarMenu from "../main/SidebarMenu.jsx";
// import Topbar from "../main/Topbar.jsx";
// import SelectPanel from "../main/SelectPanel.jsx";
// import MainInfoPanel from "../main/MainInfoPanel.jsx";
// import PaymentCheck from "../main/PaymentCheck.jsx";
//
// function Agency() {
//     return (
//         <div>
//             <div className="d-flex vh-100">
//                 <SidebarMenu/>
//                 <div className="flex-grow-1 d-flex flex-column overflow-hidden">
//                     <Topbar/>
//                     <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
//
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Agency