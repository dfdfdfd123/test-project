function FilterPanel() {
    return (
        <div>

            <div className="bg-white mb-3 ms-2">
                <div className="text-dark small">☆ 발주관리 &gt; 대리점 발주 내역 확인</div>
            </div>

        <div
            className="p-3 bg-info bg-opacity-10 border d-flex align-items-center gap-3"
            style={{ flexWrap: 'nowrap', overflowX: 'auto' }}
        >

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 가맹점 Code</span>
                <select className="form-select flex-shrink-1" style={{ minWidth: '120px' }}>
                    <option>Code</option>
                </select>
            </label>

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 가맹점</span>
                <select className="form-select flex-shrink-1" style={{ minWidth: '120px' }}>
                    <option>가맹점</option>
                </select>
            </label>

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 발주명</span>
                <select className="form-select flex-shrink-1" style={{ minWidth: '100px' }}>
                    <option>발주명</option>
                </select>
            </label>

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 일자</span>
                <input type="date" className="form-control flex-shrink-1" style={{ minWidth: '120px' }} />
                <input type="date" className="form-control flex-shrink-1 ms-1" style={{ minWidth: '120px' }} />
            </label>

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 실행완료여부</span>
                <select className="form-select flex-shrink-1" style={{ minWidth: '100px' }}>
                    <option>실행완료여부</option>
                </select>
            </label>

            <label className="d-flex align-items-center flex-nowrap">
                <span className="fw-bold me-2" style={{ whiteSpace: 'nowrap' }}>● 결제현황</span>
            <select className="form-select flex-shrink-1" style={{ minWidth: '100px' }}>
                <option>결재현황</option>
            </select>
            </label>

            <button className="btn btn-secondary flex-shrink-0">조회</button>
        </div>
        </div>
    );
}






// function FilterPanel() {
//   return (
//       // <div className="p-3 bg-white border d-flex gap-2 align-items-center flex-wrap">
//       //  <div className="p-3 bg-white border d-flex gap-2 align-items-center overflow-auto">
//
//       <div
//           className="p-3 bg-white border d-flex align-items-center gap-3"
//           style={{ flexWrap: 'nowrap', overflow: 'hidden' }}
//       >
//           <label className="d-flex align-items-center gap-1">
//               <span className="fw-bold me-3">● PJT Code</span>
//         <select className="form-select w-auto">
//           <option>PJT Code</option>
//         </select>
//           </label>
//
//           <label className="d-flex align-items-center gap-1">
//               <span className="fw-bold me-3">● 계약업체</span>
//         <select className="form-select w-auto">
//           <option>계약업체</option>
//         </select>
//           </label>
//
//           <label className="d-flex align-items-center gap-1">
//               <span className="fw-bold me-3">● 계약명</span>
//         <select className="form-select w-auto">
//           <option>계약명</option>
//         </select>
//           </label>
//
//          <label className="d-flex align-items-center gap-1">
//           <span className="fw-bold me-3">● 계약기간</span>
//         <input type="date" className="form-control w-auto" />
//         <input type="date" className="form-control w-auto" />
//          </label>
//
//           <label className="d-flex align-items-center gap-1">
//               <span className="fw-bold me-3">● 실행완료여부</span>
//         <select className="form-select w-auto">
//           <option>실행완료여부</option>
//         </select>
//           </label>
//
//         <select className="form-select w-auto">
//           <option>결재현황</option>
//         </select>
//         <button className="btn btn-secondary">조회</button>
//       </div>
//   );
// }

export default FilterPanel