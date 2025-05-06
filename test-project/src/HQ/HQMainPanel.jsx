import { useState, useEffect } from "react";
import axios from "axios";


function HQMainPanel() {

  const [showApprovalModal, setShowApprovalModal] = useState(false);

  const handleOpenModal = () => setShowApprovalModal(true);
  const handleCloseModal = () => setShowApprovalModal(false);


  const [rows, setRows] = useState([]);

  const [rows2, setRows2] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/HQMain/order-item-info")
        .then(res => {
          console.log("서버 응답:", res.data); // 👉 콘솔 출력
          setRows(res.data);
        })
        .catch(err => {
          console.error("데이터 불러오기 실패:", err);
        });

    axios.get("http://localhost:8080/HQMain/orderList")
        .then(res => {
          console.log("서버 응답:", res.data); // 👉 콘솔 출력
          setRows2(res.data);
        })
        .catch(err => {
          console.error("데이터 불러오기 실패:", err);
        });

  }, []);


  // const rows = [
  //   { branchId:'25-000', branchName: '부산점', partId: '25-001',  partName: '엔진', orderItemQuantity: '3', orderItemPrice: '49,000', orderId: 'asvv101', orderDate: '2024-04-20', orderStatus:'승인 대기' },
  //   {branchId:'25-000', branchName: '서울점', partId: '25-002', partName: '사이드미러', orderItemQuantity: '10', orderItemPrice: '530,000', orderId: 'bbas221', orderDate: '2024-04-27', orderStatus: '승인 대기'  },
  // ];

  // const rows2 = [
  //   { branchId:'25-000', partId: '부산점',  partName: '엔진', orderItemQuantity: '3', orderItemPrice: '49,000', orderDate: '2024-04-20' },
  //   {branchId:'25-000', partId: '부산점', partName: '사이드미러', orderItemQuantity: '10', orderItemPrice: '530,000', orderDate: '2024-04-27' },
  //   { branchId:'-', partId: '-',  partName: '-', orderItemQuantity: '-', orderItemPrice: '-', orderDate: '-' },
  //   {branchId:'-', partId: '-', partName: '-', orderItemQuantity: '-', orderItemPrice: '-', orderDate: '-' },
  //   {branchId:'-', partId: '-', partName: '-', orderItemQuantity: '-', orderItemPrice: '-', orderDate: '-' },
  // ];


  return (


      <div>
        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mb-3">미결재 리스트</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center align-middle" rowSpan="2"  style={{width: '130px', height: '60px'}}>대리점 ID</th>
              <th className="text-center align-middle" rowSpan="2"  style={{width: '130px', height: '60px'}}>지점명</th>
              <th className="text-center align-middle" colSpan="2">부품</th>
              <th className="text-center align-middle" colSpan="2">가격</th>
              <th className="text-center align-middle"  rowSpan="2"   style={{width: '130px'}}>주문번호</th>
              <th className="text-center align-middle"  rowSpan="2" style={{width: '130px'}}>주문일자</th>
              <th className="text-center align-middle" rowSpan="2"  style={{width: '130px'}}>주문현황</th>
            </tr>
            <tr>
              <th className="text-center align-middle" style={{width: '130px'}}>부품 Code</th>
              <th className="text-center align-middle" style={{width: '130px'}}>부품명</th>
              <th className="text-center align-middle" style={{width: '130px'}}>수량</th>
              <th className="text-center align-middle" style={{width: '130px'}}>비용</th>
            </tr>
            </thead>
            <tbody>
            {rows.map((row, i) => (
                <tr key={i}>
                  <td className="text-center align-middle">{row.branchId}</td>
                  <td className="text-center align-middle">{row.branchName}</td>
                  <td className="text-center align-middle">{row.partsId}</td>
                  <td className="text-center align-middle">{row.partName}</td>
                  <td className="text-center align-middle">{row.orderItemQuantity}</td>
                  <td className="text-center align-middle">{row.orderItemPrice.toLocaleString()}</td>
                  <td className="text-center align-middle">{row.orderId}</td>
                  <td className="text-center align-middle">{row.orderDate}</td>
                  <td className="text-center align-middle">{row.orderStatus}</td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        <hr></hr>

        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mt-1 mb-3">발주 내역</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center align-middle" rowSpan="2" style={{width: '130px', height: '60px'}}>대리점 ID</th>
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
            {rows2.map((row, i) => (
                <tr key={i}>
                  <td className="text-center align-middle">{row.branchId}</td>
                  <td className="text-center align-middle">{row.partsId}</td>
                  <td className="text-center align-middle">{row.partName}</td>
                  <td className="text-center align-middle">{row.orderItemQuantity}</td>
                  <td className="text-center align-middle">{row.orderItemPrice}</td>
                  <td className="text-center align-middle">{row.orderDate}</td>
                </tr>
            ))
            }
            </tbody>
          </table>
          <div className="mt-3 text-end">
            <button className="btn btn-warning" onClick={handleOpenModal}>결제</button>
          </div>
        </div>

        <hr></hr>

        {showApprovalModal && <ApprovalModal onClose={handleCloseModal} />}
      </div>
  );

}

function ApprovalModal({ onClose }) {
  return (
      <div className="modal show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#cfe2ff' }}>
              <h5 className="modal-title">결제</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <th>대리점 ID</th>
                  <td>25-001</td>
                  <th>부품 Code</th>
                  <td>포) 전기시험실 절연유 테스트 자동화</td>
                </tr>
                <tr>
                  <th>지점명</th>
                  <td colSpan={3}>부산점</td>
                </tr>
                <tr>
                  <th>부품명</th>
                  <td colSpan={3}>엔진</td>
                </tr>
                <tr>
                  <th>주문일자</th>
                  <td colSpan={3}>2025-02-10 ~ 2025-05-13</td>
                </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label className="form-label fw-bold">결재 의견</label>
                <input type="text" className="form-control" placeholder="무슨무슨이유로 인해 반려합니다." />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">결제</button>
              <button type="button" className="btn btn-danger">반려</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HQMainPanel

