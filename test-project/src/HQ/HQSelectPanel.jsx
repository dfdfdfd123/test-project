function HQSelectPanel() {
  return (
      <div>

        <div
            className="p-3 bg-secondary bg-opacity-10 border d-flex align-items-center gap-3"
            style={{flexWrap: 'nowrap', overflowX: 'auto'}}>

          <label className="d-flex align-items-center flex-nowrap">
            <span className="fw-bold me-2" style={{whiteSpace: 'nowrap'}}>● 대리점 ID</span>
            <select className="form-select flex-shrink-1" style={{minWidth: '120px'}}>
              <option>Code</option>
              <option>Busan-1</option>
              <option>Daegu-1</option>
              <option>Daejeon-1</option>
              <option>Gwangju-1</option>
              <option>Incheon-1</option>
              <option>Jeju-1</option>
              <option>Sejong-1</option>
              <option>Seoul-1</option>
              <option>Ulsan-1</option>
            </select>
          </label>

          <label className="d-flex align-items-center flex-nowrap">
            <span className="fw-bold me-2" style={{whiteSpace: 'nowrap'}}>● 지점명</span>
            <select className="form-select flex-shrink-1" style={{minWidth: '120px'}}>
              <option>지점명</option>
              <option>부산지점</option>
              <option>대구지점</option>
              <option>대전지점</option>
              <option>광주지점</option>
              <option>인천지점</option>
              <option>제주지점</option>
              <option>세종지점</option>
              <option>서울지점</option>
              <option>울산지점</option>
            </select>
          </label>

          <label className="d-flex align-items-center flex-nowrap">
            <span className="fw-bold me-2" style={{whiteSpace: 'nowrap'}}>● 주문일자</span>
            <input type="date" className="form-control flex-shrink-1" style={{minWidth: '120px'}}/>
            <span className="mx-2">~</span>
            <input type="date" className="form-control flex-shrink-1 ms-1" style={{minWidth: '120px'}}/>
          </label>


          <label className="d-flex align-items-center flex-nowrap">
            <span className="fw-bold me-2" style={{whiteSpace: 'nowrap'}}>● 주문현황</span>
            <select className="form-select flex-shrink-1" style={{minWidth: '100px'}}>
              <option>주문현황</option>
              <option>승인 대기</option>
              <option>결제</option>
              <option>반려</option>
            </select>
          </label>


          <button className="btn btn-secondary flex-shrink-0">조회</button>
        </div>
      </div>
  );
}


export default HQSelectPanel
