import HQSidebarMenu from "./HQSidebarMenu.jsx";
import HQTopbar from "./HQTopbar.jsx";
import HQSelectPanel from "./HQSelectPanel.jsx";
import HQMainPanel from "./HQMainPanel.jsx";
import HQPaymentCheck from "./HQPaymentCheck.jsx";
import Title from "../layout/Title.jsx";
import React, {useState} from "react";



function HQMain() {

    const [filteredRows, setFilteredRows] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);

    const handleSearch = (searchResults) => {
        setFilteredRows(searchResults);
        setIsFiltered(true);
    };

    const menuItems = [
        { text: "주문 확정", link: "/HQMain" },
        { text: "대리점 관리", link: "/HQClientList" },
        { text: "재고현황", link: "/HQStockStatus" }
    ];

    return (
        <div className="d-flex vh-100">
            <HQSidebarMenu menuItems={menuItems}/>
            <div className="flex-grow-1 d-flex flex-column overflow-hidden">
                <HQTopbar title="주문 확정"/>
                <div className="p-3 overflow-auto" style={{height: "calc(100vh - 120px)"}}>
                    <Title breadcrumb= "☆ 주문 확정 > 주문 내역" panelTitle="주문내역"/>
                    <br/>
                    <HQSelectPanel onSearch={handleSearch}  />
                    <HQMainPanel filteredRows={filteredRows} isFiltered={isFiltered} />
                    <HQPaymentCheck/>
                </div>
            </div>
        </div>
    );
}

export default HQMain;