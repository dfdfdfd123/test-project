
import SidebarMenu from "../SidebarMenu.jsx";
import Topbar from "../Topbar.jsx";
import HQPanel1 from "./HQPanel1.jsx";
import HQPanel2 from "./HQPanel2.jsx";


function Test() {

    const menuItems = [
        { text: "주문 처리", link: "#" },
        { text: "물류 재고관리", link: "/inv" }
    ];


  return (
      <div className="d-flex vh-100">
        <SidebarMenu menuItems={menuItems}/>
        <div className="flex-grow-1 d-flex flex-column overflow-hidden">
          <Topbar title="물류현황"/>
          <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
           <HQPanel1 breadcrumb= "☆ 물류 관리 > 물류 현황" panelTitle="물류 현황"/>
           <HQPanel2/>
          </div>
        </div>
      </div>
  );
}


export default Test



