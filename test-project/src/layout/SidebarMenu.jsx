import { Home, LogOut } from "lucide-react";


function SidebarMenu() {

    const menuItems = [
        "기준정보", "영업 / 견적관리", "실행관리", "계약관리", "구매관리", "재고관리", "전자결재", "그룹웨어", "시스템관리"
    ];

    return (
        <div className="d-flex flex-column text-white vh-100 p-3" style={{width: '250px', backgroundColor: '#343a40'}}>
            <div className="fs-4 fw-bold mb-4 border-bottom pb-2" style={{height: '75px'}}>CORE SYSTEM</div>

            <div className="mb-4">
                <div className="small text-white text-center">2025.04.10</div>
                <div className="fw-bold border-bottom text-center pb-4">12:24:05</div>
            </div>

            <ul className="nav nav-pills flex-column">

                {menuItems.map((item, index) => (
                    <li className="nav-item" key={index}>
                        <a href="#" className="nav-link text-white">
                            📁 {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default SidebarMenu


//
// function SidebarMenu() {
//     const menuItems = [
//         "기준정보", "영업 / 견적관리", "실행관리", "계약관리", "구매관리",
//         "재고관리", "전자결재", "그룹웨어", "시스템관리"
//     ];
//
//     return (
//         <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
//             <div className="fs-5 fw-bold mb-3 border-bottom pb-2">
//                 <span className="d-block">CORE<span className="text-secondary">SYSTEM</span></span>
//                 <small className="text-muted">주식회사 코아시스템</small>
//             </div>
//
//             <div className="mb-4">
//                 <div className="small text-muted">2025.04.10</div>
//                 <div className="fw-bold">12:24:05</div>
//             </div>
//
//             <ul className="nav nav-pills flex-column gap-2">
//                 {menuItems.map((item, index) => (
//                     <li className="nav-item" key={index}>
//                         <a href="#" className="nav-link text-white">
//                             {item}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default SidebarMenu;