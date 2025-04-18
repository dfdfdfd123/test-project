import { Home, LogOut } from "lucide-react";

function SidebarMenu() {

    const menuItems = [
        "기준정보", "영업 / 견적관리", "실행관리", "계약관리", "구매관리", "재고관리", "전자결재", "그룹웨어", "시스템관리"
    ];

    return (
        <div className="d-flex flex-column bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
            <div className="fs-4 fw-bold mb-4 border-bottom pb-2">CORE SYSTEM</div>
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