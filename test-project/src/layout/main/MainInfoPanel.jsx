import {ApprovalModal} from "./ExecutionSummaryTable.jsx";
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
            <th>PJT 유형</th>
            <th>발주명</th>
          </tr>
          </thead>
          <tbody>
          <tr>
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
            <th className="text-center align-middle" rowSpan="2" style={{ width: '150px', height: '60px' }}>항목</th>
            <th className="text-center" colSpan="2">발주내역</th>
            <th className="text-center" colSpan="2">실행대비 완료내역</th>
          </tr>
          <tr>
            <th className="text-center" style={{width: '130px'}}>금액(원)</th>
            <th className="text-center" style={{width: '130px'}}>%</th>
            <th className="text-center" style={{width: '130px'}}>차액(원)</th>
            <th className="text-center" style={{width: '130px'}}>절감률(%)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>직접원가</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 재료비</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 인건비</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 장비</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>간접원가</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr className="table-info fw-bold">
            <td>합계</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr className="table-primary">
            <td>순이익</td>
            <td >-</td>
            <td >-</td>
            <td>-</td>
            <td>-</td>
          </tr>
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