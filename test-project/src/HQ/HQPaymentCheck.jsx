import { useState, useEffect } from "react";
import axios from "axios";

function HQPaymentCheck({ filteredRows, isFiltered }) {


  const [rows, setRows] = useState([]);


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

      }
  }, [isFiltered]);


    useEffect(() => {
        if (isFiltered) {
            setRows(filteredRows);
        }
    }, [filteredRows, isFiltered]);

  return (
      <div className="p-4 mt-3 bg-light w-100 overflow-auto">
        <h2 className="h5 fw-bold mb-3">가맹점 주문 내역</h2>
        <table className="table table-bordered">
          <thead className="table-info">
          <tr>
            <th className="text-center align-middle">주문 번호</th>
            <th className="text-center align-middle">주문 일자</th>
            <th className="text-center align-middle">부품명</th>
            <th className="text-center align-middle">주문 상태</th>
          </tr>
          </thead>
          <tbody>
          {rows.length === 0 ? (
              <tr>
                  <td colSpan="4" className="text-center">처리된 것이 없습니다.</td>
              </tr>
          ) : (
          rows.map((row, i) => (
              <tr key={i}>
                <td className="text-center align-middle">{row.orderId}</td>
                <td className="text-center align-middle">{row.orderDate}</td>
                <td className="text-center align-middle">{row.partName}</td>
                <td className="text-center align-middle">{row.orderDeny}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
  );
}


export default HQPaymentCheck

