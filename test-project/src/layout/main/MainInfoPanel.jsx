import {ApprovalModal} from "./PaymentCheck.jsx";
import {useState} from "react";

function MainInfoPanel() {

  const rows = [
    { clientId:'25-000', partId: '25-001',  name: '엔진', quantity: '3', price: '49,000', date: '2024-04-20' },
    {clientId:'25-000', partId: '25-002', name: '사이드미러', quantity: '10', price: '530,000', date: '2024-04-20' },
  ];

  const rows2 = [
    { clientId:'-', partId: '-',  name: '-', quantity: '-', price: '-', date: '-' },
    {clientId:'-', partId: '-', name: '-', quantity: '-', price: '-', date: '-' },
    { clientId:'-', partId: '-',  name: '-', quantity: '-', price: '-', date: '-' },
    {clientId:'-', partId: '-', name: '-', quantity: '-', price: '-', date: '-' },
    {clientId:'-', partId: '-', name: '-', quantity: '-', price: '-', date: '-' },
  ];



  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const handleOpenModal = () => setShowApprovalModal(true);
  const handleCloseModal = () => setShowApprovalModal(false);


  return (
      <div>

        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mb-3">미결재 리스트</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center" rowSpan="2" style={{width: '130px', height: '60px'}}>대리점 ID</th>
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
            {rows.map((row, i) => (
                <tr key={i}>
                  <td className="text-center align-middle">{row.clientId}</td>
                  <td className="text-center align-middle">{row.partId}</td>
                  <td className="text-center align-middle">{row.name}</td>
                  <td className="text-center align-middle">{row.quantity}</td>
                  <td className="text-center align-middle">{row.price}</td>
                  <td className="text-center align-middle">{row.date}</td>
                </tr>
            ))
            }
            </tbody>
          </table>
        </div>


        <hr></hr>

        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mb-3 text-warning">요청한 가맹점 정보</h2>
          <table className="table table-bordered">
            <thead className="table-light">
            <tr>
              <th className="text-center align-middle">가맹점 Code</th>
              <th className="text-center align-middle">지점명</th>
              <th className="text-center align-middle">주문번호</th>
              <th className="text-center align-middle">일자</th>
              <th className="text-center align-middle">주문현황</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="text-center align-middle">-</td>
              <td className="text-center align-middle">-</td>
              <td className="text-center align-middle">-</td>
              <td className="text-center align-middle">-</td>
              <td className="text-center align-middle">-</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mt-1 mb-3">발주 내역</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center" rowSpan="2" style={{width: '130px', height: '60px'}}>대리점 ID</th>
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
                  <td className="text-center align-middle">{row.clientId}</td>
                  <td className="text-center align-middle">{row.partId}</td>
                  <td className="text-center align-middle">{row.name}</td>
                  <td className="text-center align-middle">{row.quantity}</td>
                  <td className="text-center align-middle">{row.price}</td>
                  <td className="text-center align-middle">{row.date}</td>
                </tr>
              ))
            }

            {/*<tr className="table-info fw-bold">*/}
            {/*<td>합계</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*</tr>*/}
            {/*<tr className="table-primary">*/}
            {/*  <td>순이익</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*  <td>-</td>*/}
            {/*</tr>*/}
            </tbody>
          </table>
          <div className="mt-3 text-end">
            <button className="btn btn-warning" onClick={handleOpenModal}>결재</button>
          </div>
        </div>
        {showApprovalModal && (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
              <ApprovalModal/>
              <button className="position-absolute top-0 end-0 m-3 btn btn-outline-light" onClick={handleCloseModal}>X
              </button>
            </div>
        )}

        <hr></hr>
      </div>
  );


}

export default MainInfoPanel