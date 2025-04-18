function MainInfoPanel() {

  return (
      <div className="p-4 bg-light w-100 overflow-auto">
        <h2 className="h5 fw-bold mb-3">주문등록</h2>
        <table className="table table-bordered">
          <thead className="table-light">
          <tr>
            <th>주문번호</th>
            <th>주문자</th>
            <th>처리구분</th>
            <th>배송방법</th>
            <th>도착지</th>
            <th>비고</th>
            <th>품번</th>
            <th>품명</th>
            <th>수량</th>
            <th>단가</th>
            <th>총액</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>25-001</td>
            <td>PS25-01</td>
            <td>완료</td>
            <td>택배</td>
            <td>서울</td>
            <td>비고명</td>
            <td>25-001</td>
            <td>제품명</td>
            <td>2</td>
            <th>10000</th>
            <th>20000</th>
          </tr>
          </tbody>
        </table>

        <h2 className="h5 fw-bold mt-5 mb-3">주문확정</h2>
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