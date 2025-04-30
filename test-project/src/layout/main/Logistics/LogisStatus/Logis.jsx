
import SidebarMenu from "../../SidebarMenu.jsx";
import Topbar from "../../Topbar.jsx";
import Title from "../Title.jsx";
import Table from "./Table.jsx";


function Logis() {

    const menuItems = [
        { text: "물류 현황", link: "#" },
        { text: "물류 재고관리", link: "/inv" }
    ];


  return (
      <div className="d-flex vh-100">
        <SidebarMenu menuItems={menuItems}/>
        <div className="flex-grow-1 d-flex flex-column overflow-hidden">
          <Topbar title="물류현황"/>
          <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
           <Title breadcrumb= "☆ 물류 관리 > 물류 현황" panelTitle="물류 현황"/>
           <Table/>
          </div>
        </div>
      </div>
  );
}


export default Logis



