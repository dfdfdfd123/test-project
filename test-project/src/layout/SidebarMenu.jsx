import { Home, LogOut } from "lucide-react";

function SidebarMenu() {

    const menuItems = [
        "주문", "출고", "재고관리", "제품단가", "대리점취급품목", "test", "test2", "test3", "test4"
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