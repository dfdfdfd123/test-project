function FilterPanel() {
  return (
      <div className="p-3 bg-white border d-flex gap-2 align-items-center flex-wrap">
        <select className="form-select w-auto">
          <option>PJT Code</option>
        </select>
        <select className="form-select w-auto">
          <option>계약업체</option>
        </select>
        <select className="form-select w-auto">
          <option>계약명</option>
        </select>
        <input type="date" className="form-control w-auto" />
        <input type="date" className="form-control w-auto" />
        <select className="form-select w-auto">
          <option>실행완료여부</option>
        </select>
        <select className="form-select w-auto">
          <option>결재현황</option>
        </select>
        <button className="btn btn-primary">조회</button>
      </div>
  );
}

export default FilterPanel