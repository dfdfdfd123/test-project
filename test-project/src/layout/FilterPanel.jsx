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


export default FilterPanel