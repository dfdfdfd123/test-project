import { Home, LogOut } from "lucide-react";


function SidebarMenu() {

    const menuItems = [
        "기준정보", "가맹점관리", "입고관리", "발주관리", "재고관리", "출고관리", "제품단가정보", "매출관리"
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


