function MainInfoPanel() {

  return (
      <div className="p-4 bg-light w-100 overflow-auto">
        <h2 className="h5 fw-bold mb-3">사업개요</h2>
        <table className="table table-bordered">
          <thead className="table-light">
          <tr>
            <th>PJT Code</th>
            <th>PJT 유형</th>
            <th>계약명</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>25-001</td>
            <td>PS25-01</td>
            <td>포) 전기시험실 절연유 테스트 자동화</td>
          </tr>
          </tbody>
        </table>

        <h2 className="h5 fw-bold mt-5 mb-3">계약내역</h2>
        <table className="table table-bordered">
          <thead className="table-light">
          <tr>
            <th>항목</th>
            <th>금액(원)</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>직접원가</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 재료비</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 인건비</td>
            <td>-</td>
          </tr>
          <tr>
            <td className="ps-4">ㄴ 장비</td>
            <td>-</td>
          </tr>
          <tr>
            <td>간접원가</td>
            <td>-</td>
          </tr>
          <tr className="table-light fw-bold">
            <td>합계</td>
            <td>400,000,000</td>
          </tr>
          <tr>
            <td>순이익</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
      </div>
  );



}

export default MainInfoPanel