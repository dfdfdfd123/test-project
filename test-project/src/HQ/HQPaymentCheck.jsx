import { useState, useEffect } from "react";
import axios from "axios";

function HQPaymentCheck() {


  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/HQMain/payment")
        .then(res => {
          console.log("서버 응답:", res.data); // 👉 콘솔 출력
          setRows(res.data);
        })
        .catch(err => {
          console.error("데이터 불러오기 실패:", err);
        });

  }, []);

  // const rows = [
  //   { orderId: '25-001', orderDate: '2024-04-20', partName: '엔진', orderDeny: '결제' },
  //   { orderId: '25-002', orderDate: '2024-04-20', partName: '사이드 미러', orderDeny: '반려' },
  //   { orderId: '25-003', orderDate: '2024-04-20', partName: '엔진', orderDeny: '결제' },
  //   { orderId: '25-004', orderDate: '2024-04-20', partName: '사이드 미러', orderDeny: '반려' },
  // ];

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
          {rows.map((row, i) => (
              <tr key={i}>
                <td className="text-center align-middle">{row.orderId}</td>
                <td className="text-center align-middle">{row.orderDate}</td>
                <td className="text-center align-middle">{row.partName}</td>
                <td className="text-center align-middle">{row.orderDeny}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}


export default HQPaymentCheck

