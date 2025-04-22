function PaymentCheck() {
  const rows = [
    { code: '25-001', company: '서울 강남점', name: '트위드 재킷', status: '결제' },
    { code: '25-002', company: '부산 해운대점', name: '클래식 플랩 백', status: '반려' },
    { code: '25-003', company: '부산 서면점', name: '코코 크롭 셋업', status: '결제' },
    { code: '25-004', company: '서울 강서점', name: '진주 버튼 원피스', status: '반려' },
  ];

  return (
      <table className="table table-bordered mt-5">
        <thead className="table-info">
        <tr>
          <th>가맹점 Code</th>
          <th>가맹점</th>
          <th>가맹점명</th>
          <th>결제 상태</th>
        </tr>
        </thead>
        <tbody>
        {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.code}</td>
              <td>{row.company}</td>
              <td>{row.name}</td>
              <td>{row.status}</td>
            </tr>
        ))}
        </tbody>
      </table>
  );
}


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
                  <th>가맹점 Code</th>
                  <td>25-001</td>
                  <th>발주명</th>
                  <td>포) 전기시험실 절연유 테스트 자동화</td>
                </tr>
                <tr>
                  <th>발주점</th>
                  <td colSpan={3}>트위드 재킷</td>
                </tr>
                <tr>
                  <th>일자</th>
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

export default PaymentCheck