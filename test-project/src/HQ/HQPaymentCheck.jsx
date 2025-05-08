import { useState, useEffect } from "react";
import axios from "axios";

function HQPaymentCheck({ filteredRows, isFiltered }) {


    const [rows, setRows] = useState([]);

    const [rows2, setRows2] = useState([]);

    const [selectedOrderId, setSelectedOrderId] = useState(null);  // 행 클릭

    const [showOrderDetails, setShowOrderDetails] = useState(false); // 상세 내역 숨기기


    useEffect(() => {

        if (!isFiltered) {
            axios.get("http://localhost:8080/HQMain/payment")
                .then(res => {
                    console.log("서버 응답:", res.data);
                    setRows(res.data);
                })
                .catch(err => {
                    console.error("데이터 불러오기 실패:", err);
                });

            axios.get("http://localhost:8080/HQMain/paymentDetail")
                .then(res => {
                    console.log("서버 응답:", res.data); // 👉 콘솔 출력
                    setRows2(res.data);
                })
                .catch(err => {
                    console.error("데이터 불러오기 실패:", err);
                });

        }
    }, [isFiltered]);


    useEffect(() => {
        if (isFiltered) {
            setRows(filteredRows);
            setRows2(filteredRows);
        }
    }, [filteredRows, isFiltered]);

    // 주문번호 기준으로 그룹핑하여 대표 부품명 가공
    const groupedRows = Object.values(
        rows.reduce((acc, row) => {
            if (!acc[row.orderId]) {
                acc[row.orderId] = {
                    ...row,
                    partNames: [row.partName],
                };
            } else {
                acc[row.orderId].partNames.push(row.partName);
            }
            return acc;
        }, {})
    );

    const displayRows = groupedRows.map(group => {
        const firstPartName = group.partNames[0];
        const total = group.partNames.length;
        return {
            ...group,
            displayPartName: total > 1 ? `${firstPartName} 외 ${total - 1}종` : firstPartName,
        };
    });

    return (
        <div>
            <div className="p-4 mt-3 bg-light w-100 overflow-auto">
                <h2 className="h5 fw-bold mb-3">가맹점 주문 내역</h2>
                <table className="table table-bordered">
                    <thead className="table-info">
                    <tr>
                        <th className="text-center align-middle">주문번호</th>
                        <th className="text-center align-middle">주문일자</th>
                        <th className="text-center align-middle">부품명</th>
                        <th className="text-center align-middle">주문현황</th>
                    </tr>
                    </thead>
                    <tbody>
                    {displayRows.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="text-center">처리된 것이 없습니다.</td>
                        </tr>
                    ) : (
                        displayRows.map((row, i) => (
                            <tr key={i} onClick={() => {
                                if (selectedOrderId === row.orderId) {
                                    // 이미 선택된 경우 → 선택 해제
                                    setSelectedOrderId(null);
                                    setShowOrderDetails(false);
                                } else {
                                    // 새로 선택한 경우
                                    setSelectedOrderId(row.orderId);
                                    setShowOrderDetails(true);
                                }
                            }} style={{ cursor: 'pointer' }}>
                                <td className="text-center align-middle">{row.orderId}</td>
                                <td className="text-center align-middle">{row.orderDate}</td>
                                <td className="text-center align-middle">{row.displayPartName}</td>
                                <td className="text-center align-middle">{row.orderDeny}</td>
                            </tr>
                        ))
                    )}
                    {/*{rows.length === 0 ? (*/}
                    {/*    <tr>*/}
                    {/*        <td colSpan="4" className="text-center">처리된 것이 없습니다.</td>*/}
                    {/*    </tr>*/}
                    {/*) : (*/}
                    {/*    // rows.map((row, i) => (*/}
                    {/*    Array.from(new Map(rows.map(row => [row.orderId, row])).values()).map((row, i) => (*/}

                    {/*        <tr key={i} onClick={() => {*/}
                    {/*            setSelectedOrderId(row.orderId);*/}
                    {/*            setShowOrderDetails(true);*/}
                    {/*        }} style={{ cursor: 'pointer' }}>*/}
                    {/*            <td className="text-center align-middle">{row.orderId}</td>*/}
                    {/*            <td className="text-center align-middle">{row.orderDate}</td>*/}
                    {/*            <td className="text-center align-middle">{row.partName}</td>*/}
                    {/*            <td className="text-center align-middle">{row.orderDeny}</td>*/}
                    {/*        </tr>*/}
                    {/*    ))*/}
                    {/*)}*/}
                    </tbody>
                </table>
            </div>

            <hr/>

            {showOrderDetails && (
                <>
                    <div className="p-4 mt-3 bg-light w-100 overflow-auto">
                        <h2 className="h5 fw-bold mt-1 mb-3">상세 내역</h2>
                        <table className="table table-bordered">
                            <thead className="table-info">
                            <tr>
                                {/*<th className="text-center align-middle" rowSpan="2" style={{width: '20px', height: '60px'}}></th>*/}
                                <th className="text-center align-middle" rowSpan="2" style={{width: '130px', height: '60px'}}>대리점 ID
                                </th>
                                <th className="text-center align-middle" colSpan="2">부품</th>
                                <th className="text-center align-middle" colSpan="2">가격</th>
                                <th className="text-center align-middle" rowSpan="2" style={{width: '130px'}}>주문일자</th>
                            </tr>
                            <tr>
                                <th className="text-center align-middle" style={{width: '130px'}}>부품 Code</th>
                                <th className="text-center align-middle" style={{width: '130px'}}>부품명</th>
                                <th className="text-center align-middle" style={{width: '130px'}}>수량</th>
                                <th className="text-center align-middle" style={{width: '130px'}}>비용</th>
                            </tr>
                            </thead>
                            <tbody>
                            {rows2.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center">상세 내역이 없습니다.</td>
                                </tr>
                            ) : (
                                (() => {
                                    const renderedOrderIds = new Set();

                                    // ✅ selectedOrderId로 필터링
                                    const filteredRows2 = rows2.filter(row => row.orderId === selectedOrderId);

                                    return filteredRows2.map((row, i) => {
                                        renderedOrderIds.add(row.orderId);

                                        return (
                                            <tr
                                                key={i}
                                                style={{ cursor: 'pointer', backgroundColor: selectedOrderId === row.orderId ? '#ffe8a1' : '' }}
                                                onClick={() => setSelectedOrderId(row.orderId)}
                                            >
                                                {/* 체크박스 셀 제거 */}
                                                <td className="text-center align-middle">{row.branchId}</td>
                                                <td className="text-center align-middle">{row.partId}</td>
                                                <td className="text-center align-middle">{row.partName}</td>
                                                <td className="text-center align-middle">{row.orderItemQuantity}</td>
                                                <td className="text-center align-middle">{row.orderItemPrice.toLocaleString()}</td>
                                                <td className="text-center align-middle">{row.orderDate}</td>
                                            </tr>
                                        );
                                    });
                                })()
                            )}
                            </tbody>

                        </table>


                    </div>
                </>
            )}
        </div>
            );
}


export default HQPaymentCheck

