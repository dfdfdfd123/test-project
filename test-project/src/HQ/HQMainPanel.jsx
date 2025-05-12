import { useState, useEffect } from "react";
import axios from "axios";

function HQMainPanel( { filteredRows, isFiltered }) {

  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalData, setApprovalData] = useState([]);


  const [selectedOrderId, setSelectedOrderId] = useState(null);  // 행 클릭

  const [showOrderDetails, setShowOrderDetails] = useState(false); // 발주 내역 숨기기

  const [denyReason, setDenyReason] = useState("");


  const handleOpenModal = () => {
    const selectedRows = rows2.filter(row => row.orderId === selectedOrderId);
    setApprovalData(selectedRows.length > 0 ? selectedRows : []);
    setShowApprovalModal(true);
  };

  const handleCloseModal = () => setShowApprovalModal(false);


  const [rows, setRows] = useState([]);

  const [rows2, setRows2] = useState([]);

  useEffect(() => {

    if (!isFiltered) {
      axios.get("http://localhost:8080/HQMain/order-item-info")
          .then(res => {
            console.log("order-item-info 응답:", res.data);
            setRows(res.data);
          })
          .catch(err => {
            console.error("order-item-info 불러오기 실패:", err);
          });

      axios.get("http://localhost:8080/HQMain/orderList")
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


  return (


      <div>
        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mb-3">미결재 리스트</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center align-middle"  rowSpan="2" style={{width: '130px', height: '60px', backgroundColor: "#E3F0FF" }}>주문번호</th>
              <th className="text-center align-middle" rowSpan="2" style={{width: '130px', height: '60px', backgroundColor: "#E3F0FF"}}>대리점 ID</th>
              <th className="text-center align-middle" colSpan="2" style={{backgroundColor: "#E3F0FF"}}>일자</th>
              <th className="text-center align-middle" rowSpan="2" style={{width: '130px', backgroundColor: "#E3F0FF"}}>가격</th>
              <th className="text-center align-middle" rowSpan="2" style={{width: '130px', backgroundColor: "#E3F0FF"}}>주문현황</th>
            </tr>
            <tr>
              <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>주문일자</th>
              <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>납품일자</th>
            </tr>
            </thead>
            <tbody>
            {rows.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center">미결제 리스트가 없습니다.</td>
                </tr>
            ) : (
                // 중복 주문번호 제거: 가장 첫 번째 orderId 기준으로 하나만 표시
                Array.from(new Map(rows.map(row => [row.orderId, row])).values()).map((row, i) => (
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
                      <td className="text-center align-middle">{row.branchId}</td>
                      <td className="text-center align-middle">{row.orderDate}</td>
                      <td className="text-center align-middle">{row.orderDueDate}</td>
                      <td className="text-center align-middle">{row.orderPrice.toLocaleString()}원</td>
                      <td className="text-center align-middle">{row.orderStatus}</td>
                    </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <hr></hr>

        {showOrderDetails && (
            <>
            <div className="p-4 mt-3 bg-light w-100 overflow-auto" style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <h2 className="h5 fw-bold mt-1 mb-3">발주 내역</h2>
              <table className="table table-bordered">
                <thead className="table-info">
                <tr>
                  {/*<th className="text-center align-middle" rowSpan="2" style={{width: '20px', height: '60px'}}></th>*/}
                  <th className="text-center align-middle" rowSpan="2" style={{width: '130px', height: '60px', backgroundColor: "#E3F0FF"}}>대리점 ID
                  </th>
                  <th className="text-center align-middle" colSpan="2" style={{backgroundColor: "#E3F0FF"}}>부품</th>
                  <th className="text-center align-middle" colSpan="2" style={{backgroundColor: "#E3F0FF"}}>가격</th>
                  <th className="text-center align-middle" rowSpan="2" style={{width: '130px' , backgroundColor: "#E3F0FF"}}>주문일자</th>
                </tr>
                <tr>
                  <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>부품 Code</th>
                  <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>부품명</th>
                  <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>수량</th>
                  <th className="text-center align-middle" style={{width: '130px', backgroundColor: "#E3F0FF"}}>비용</th>
                </tr>
                </thead>
                <tbody>
                {rows2.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center">발주 내역이 없습니다.</td>
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
                              <td className="text-center align-middle">{row.orderItemPrice.toLocaleString()}원</td>
                              <td className="text-center align-middle">{row.orderDate}</td>
                            </tr>
                        );
                      });
                    })()
                )}
                </tbody>

              </table>
              <div className="mt-3 text-end">
                {/*<button className="btn btn-warning" onClick={handleOpenModal}>결제</button>*/}
                <button className={'btn'} style={{backgroundColor: "#CFE2FF"}} type={"button"} onClick={handleOpenModal}>결제</button>
              </div>

            </div>

              <hr/>
            </>
        )}


        {showApprovalModal &&
            <ApprovalModal onClose={handleCloseModal} rows={rows} rows2={approvalData} denyReason={denyReason} setDenyReason={setDenyReason}  />}
      </div>

  );

}

function ApprovalModal({onClose, rows, rows2, denyReason, setDenyReason}) {

  if (!rows || rows.length === 0) return null;

  if (!rows2 || rows2.length === 0) return null;

  // 중복 제거 및 필드별 콤마로 구분된 값 생성
  const uniqueByField = (field) => [...new Set(rows2.map(row => row[field]))].join(', ');


  const branchId = uniqueByField('branchId');
  const partId = uniqueByField('partId');
  const branchName = uniqueByField('branchName');
  const partName = uniqueByField('partName');
  const orderDate = uniqueByField('orderDate');

  const handleApproval = (type) => {
    const status = type === '결제' ? '결제' : '반려';
    const finalDenyReason = type === '결제' ? '결제되었습니다.' : denyReason;

    if (rows2.length === 0) {
      alert("선택된 주문이 없습니다.");
      return;
    }

    // 반려일 때 이유 미입력 시 알림
    if (type === '반려' && denyReason.trim() === '') {
      alert("반려 사유를 입력하세요.");
      return;
    }

    let requestBody;

    if (rows2.length === 1) {
      //  단일 처리용: orderId 와 partId 에 해당하는 것 하나만 전송
      requestBody = {
        orderId: rows2[0].orderId,
        orderStatus: status,
        orderDeny: finalDenyReason,
      };
    } else {
      //  복수 처리용: orderIdList 전송
      const orderIdList = rows2.map(row => row.orderId);
      requestBody = {
        orderIdList: orderIdList,
        orderStatus: status,
        orderDeny: finalDenyReason,
      };
    }

    // 결제 or 반려 처리
    axios.post("http://localhost:8080/HQMain/update", requestBody)
        .then(res => {
          console.log(res.data);
          alert(`${type} 처리 완료`);
          onClose(); // 모달 닫기
        })
        .catch(err => {
          console.error(`${type} 처리 실패`, err);
          alert(`${type} 처리 중 오류 발생`);
        });
  };



  return (
      <div className="modal show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ backgroundColor: '#cfe2ff' }}>
              <h5 className="modal-title">결제</h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered" >
                <tbody>
                <tr>
                  <th style={ {whiteSpace: "nowrap"}}>대리점 ID</th>
                  <td style={ {whiteSpace: "nowrap"}}>{branchId}</td>
                  <th style={ {whiteSpace: "nowrap"}}>부품 Code</th>
                  <td>{partId}</td>
                </tr>
                <tr>
                  <th style={ {whiteSpace: "nowrap"}}>지점명</th>
                  <td colSpan={3}>{branchName}</td>
                </tr>
                <tr>
                  <th>부품명</th>
                  <td colSpan={3}>{partName}</td>
                </tr>
                <tr>
                  <th>주문일자</th>
                  <td colSpan={3}>{orderDate}</td>
                </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label className="form-label fw-bold">반려 이유</label>
                <input type="text" className="form-control" placeholder="무슨무슨사유로 인해 반려합니다." value={denyReason}   onChange={(e) => setDenyReason(e.target.value)} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => handleApproval('결제')}>결제</button>
              <button type="button" className="btn btn-danger" onClick={() => handleApproval('반려')}>반려</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HQMainPanel


