import {ApprovalModal} from "./PaymentCheck.jsx";
import {useState} from "react";

function MainInfoPanel() {

  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const handleOpenModal = () => setShowApprovalModal(true);
  const handleCloseModal = () => setShowApprovalModal(false);


  return (
      <div>
      <div className="p-4 mt-3 bg-light w-100 overflow-auto">
        <h2 className="h5 fw-bold mb-3 text-warning">요청한 가맹점 정보</h2>
        <table className="table table-bordered">
          <thead className="table-light">
          <tr>
            <th>가맹점 Code</th>
            <th>지점명</th>
            <th>주문번호</th>
            <th>일자</th>
            <th>주문현황</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
      </div>

  <div className="p-4 mt-3 bg-light w-100 overflow-auto">
        <h2 className="h5 fw-bold mt-1 mb-3">발주 내역</h2>
        <table className="table table-bordered">
          <thead className="table-info">
          <tr>
            <th className="text-center" style={{width: '130px', height: '60px'}}></th>
            <th className="text-center align-middle" colSpan="3">계약 정보</th>
            <th className="text-center align-middle" colSpan="3">비용</th>
            <th  className="text-center align-middle" style={{width: '130px'}}>절감액</th>
            <th  className="text-center align-middle" style={{width: '130px'}}>절감율</th>
          </tr>
          <tr>
            <th className="text-center align-middle" style={{width: '130px', height: '60px'}}>항목</th>
            <th className="text-center align-middle" style={{width: '130px'}}>계약 단가</th>
            <th className="text-center align-middle" style={{width: '130px'}}>예상 수량</th>
            <th className="text-center align-middle" style={{width: '130px'}}>예상 비용</th>
            <th className="text-center align-middle" style={{width: '130px'}}>실제 단가</th>
            <th className="text-center align-middle" style={{width: '130px'}}>실제 수량</th>
            <th className="text-center align-middle" style={{width: '130px'}}>실제 비용</th>
            <th className="text-center align-middle" style={{width: '130px'}}></th>
            <th className="text-center align-middle" style={{width: '130px'}}></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
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
            <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
              <ApprovalModal />
              <button className="position-absolute top-0 end-0 m-3 btn btn-outline-light" onClick={handleCloseModal}>X</button>
            </div>
        )}
  </div>
  );




}

export default MainInfoPanel