function ExecutionSummaryTable() {
  const rows = [
    { code: '25-001', company: 'POSCO 포항', name: '포) 전기시험실 절연유 테스트 자동화' },
    { code: '25-002', company: 'POSCO', name: '포) 제철 3고로 TLC Weight' },
    { code: '25-003', company: 'POSCO', name: '포) 제강 공정분석센터' },
    { code: '25-004', company: 'POSCO', name: '포) 전기강판 3ACL 시편인출 자동화' },
  ];

  return (
      <table className="table table-bordered mt-3">
        <thead className="table-light">
        <tr>
          <th>주문번호</th>
          <th>주문업체</th>
          <th>주문명</th>
        </tr>
        </thead>
        <tbody>
        {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.code}</td>
              <td>{row.company}</td>
              <td>{row.name}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}

// ApprovalModal.tsx
export function ApprovalModal() {
  return (
      <div className="modal show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">결재</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <tbody>
                <tr>
                  <th>PJT Code</th>
                  <td>25-001</td>
                  <th>PJT 명</th>
                  <td>포) 전기시험실 절연유 테스트 자동화</td>
                </tr>
                <tr>
                  <th>계약업체</th>
                  <td colSpan={3}>POSCO 포항</td>
                </tr>
                <tr>
                  <th>계약기간</th>
                  <td colSpan={3}>2025-02-10 ~ 2025-05-13</td>
                </tr>
                <tr>
                  <th>결재라인</th>
                  <td colSpan={3}>리더: 홍길동 / 실장: 김동욱</td>
                </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label className="form-label fw-bold">결재 의견</label>
                <input type="text" className="form-control" placeholder="무슨무슨이유로 인해 반려합니다." />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">결재</button>
              <button type="button" className="btn btn-danger">반려</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ExecutionSummaryTable