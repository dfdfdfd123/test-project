import SidebarMenu from "./SidebarMenu.jsx";
import Topbar from "./Topbar.jsx";
import SelectPanel from "./SelectPanel.jsx";
import MainInfoPanel from "./MainInfoPanel.jsx";
import PaymentCheck from "./PaymentCheck.jsx";

function Home() {

    const menuItems = [
        { text: "주문 확정", link: "/" },
        { text: "대리점 관리", link: "/" },
        { text: "재고현황", link: "/" }
    ];

  return (
      <div className="d-flex vh-100">
        <SidebarMenu menuItems={menuItems}/>
        <div className="flex-grow-1 d-flex flex-column overflow-hidden">
          <Topbar title="주문 확정"/>
          <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
            <SelectPanel/>
            <MainInfoPanel/>
            <PaymentCheck/>
          </div>
        </div>
      </div>
  );
}

export default Home;


// import SidebarMenu from "./SidebarMenu.jsx";
// import Topbar from "./Topbar.jsx";
// import SelectPanel from "./SelectPanel.jsx";
// import MainInfoPanel from "./MainInfoPanel.jsx";
// import PaymentCheck from "./PaymentCheck.jsx";
//
// function Home() {
//     return (
//         <div className="d-flex vh-100">
//           <SidebarMenu/>
//           <div className="flex-grow-1 d-flex flex-column overflow-hidden">
//             <Topbar/>
//             <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
//               <SelectPanel/>
//               <MainInfoPanel/>
//               <PaymentCheck/>
//             </div>
//           </div>
//
//         </div>
//     );
// }
//
// export default Home