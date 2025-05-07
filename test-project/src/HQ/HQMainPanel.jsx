import { useState, useEffect } from "react";
import axios from "axios";

function HQMainPanel( { filteredRows, isFiltered }) {

  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [approvalData, setApprovalData] = useState([]);

  const [checkedOrderIds, setCheckedOrderIds] = useState([]);

  // const handleOpenModal = () => {
  //   if (checkedRows.length > 0) {
  //     setApprovalData(checkedRows); // 선택된 행만 모달로 전달
  //   } else {
  //     setApprovalData(rows2); // 아무 것도 선택되지 않았으면 전체 전달
  //   }
  //   setShowApprovalModal(true);
  // };

  const handleOpenModal = () => {
    const selectedRows = rows2.filter(row => checkedOrderIds.includes(row.orderId));
    setApprovalData(selectedRows.length > 0 ? selectedRows : rows2);
    setShowApprovalModal(true);
  };


  const handleCloseModal = () => setShowApprovalModal(false);

  // const [checkedRows, setCheckedRows] = useState([]);

  // const handleCheckboxChange = (row) => {
  //   setCheckedRows(prev => {
  //     const exists = prev.find(r => r === row);
  //     if (exists) {
  //       return prev.filter(r => r !== row); // 체크 해제
  //     } else {
  //       return [...prev, row]; // 체크
  //     }
  //   });
  // };

  const handleCheckboxChange = (orderId) => {
    setCheckedOrderIds(prev => {
      if (prev.includes(orderId)) {
        return prev.filter(id => id !== orderId);
      } else {
        return [...prev, orderId];
      }
    });
  };


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
              {rows.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center">미결제 리스트가 없습니다.</td>
                  </tr>
              ) : (
                  rows.map((row, i) => (
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
                  ))
              )}
            </tbody>
          </table>
        </div>

        <hr></hr>

        <div className="p-4 mt-3 bg-light w-100 overflow-auto">
          <h2 className="h5 fw-bold mt-1 mb-3">발주 내역</h2>
          <table className="table table-bordered">
            <thead className="table-info">
            <tr>
              <th className="text-center align-middle" rowSpan="2" style={{width: '20px', height: '60px'}}></th>
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
            {rows2.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">발주 내역이 없습니다.</td>
                </tr>
            ) : (
                (() => {
                  const renderedOrderIds = new Set();

                  return rows2.map((row, i) => {


                    const isFirst = !renderedOrderIds.has(row.orderId);
                    renderedOrderIds.add(row.orderId);

                    return (
                        <tr key={i}>
                          <td className="text-center align-middle">
                            {isFirst && (
                                <input
                                    type="checkbox"
                                    checked={checkedOrderIds.includes(row.orderId)}
                                    onChange={() => handleCheckboxChange(row.orderId)}
                                />
                            )}
                          </td>
                    <td className="text-center align-middle">{row.branchId}</td>
                    <td className="text-center align-middle">{row.partsId}</td>
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
          <div className="mt-3 text-end">
            <button className="btn btn-warning" onClick={handleOpenModal}>결제</button>
          </div>
        </div>

        <hr></hr>

        {showApprovalModal && <ApprovalModal onClose={handleCloseModal} rows={rows} rows2={approvalData}/>}
      </div>
  );

}

// ) : (
//     rows2.map((row, i) => (
//         <tr key={i}>
//           <td className="text-center align-middle">
//             <input
//                 type="checkbox"
//                 checked={checkedRows.includes(row)}
//                 onChange={() => handleCheckboxChange(row)}
//             />
//           </td>
//           <td className="text-center align-middle">{row.branchId}</td>
//           <td className="text-center align-middle">{row.partsId}</td>
//           <td className="text-center align-middle">{row.partName}</td>
//           <td className="text-center align-middle">{row.orderItemQuantity}</td>
//           <td className="text-center align-middle">{row.orderItemPrice}</td>
//           <td className="text-center align-middle">{row.orderDate}</td>
//         </tr>
//     ))
// )}


function ApprovalModal({onClose, rows, rows2}) {

  if (!rows || rows.length === 0) return null;

  if (!rows2 || rows2.length === 0) return null;

  // 중복 제거 및 필드별 콤마로 구분된 값 생성
  // const uniqueByField1 = (field) => [...new Set(rows.map(row => row[field]))].join(', ');
  const uniqueByField = (field) => [...new Set(rows2.map(row => row[field]))].join(', ');

  const branchId = uniqueByField('branchId');
  const partsId = uniqueByField('partsId');
  const branchName = uniqueByField('branchName');
  const partName = uniqueByField('partName');
  const orderDate = uniqueByField('orderDate');

  const handleApproval = (type) => {
    const status = type === '결제' ? '승인' : '거부';

    if (rows2.length === 0) {
      alert("선택된 주문이 없습니다.");
      return;
    }

    let requestBody;

    if (rows2.length === 1) {
      //  단일 처리용: orderId 와 partsId 에 해당하는 것 하나만 전송
      requestBody = {
        orderId: rows2[0].orderId,
        orderStatus: status,
        orderDeny: type,
      };
    } else {
      //  복수 처리용: orderIdList 전송
      const orderIdList = rows2.map(row => row.orderId);
      requestBody = {
        orderIdList: orderIdList,
        orderStatus: status,
        orderDeny: type,
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
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <th>대리점 ID</th>
                  <td>{branchId}</td>
                  <th>부품 Code</th>
                  <td>{partsId}</td>
                </tr>
                <tr>
                  <th>지점명</th>
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
              {/*<div className="form-group">*/}
              {/*  <label className="form-label fw-bold">결제 의견</label>*/}
              {/*  <input type="text" className="form-control" placeholder="무슨무슨이유로 인해 반려합니다." />*/}
              {/*</div>*/}
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


