import { useState } from "react";
import { User, Lock } from "lucide-react";

function Login() {
  const [selectedTab, setSelectedTab] = useState("Head office");

  const tabs = ["Head office", "DealerPortal", "Warehouse"];

  return (
      <div className="d-flex vh-100" style={{ backgroundColor: "#343a40" }}>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="bg-white p-5" style={{ minWidth: "400px", borderRadius: "8px" }}>
            {/* 상단 타이틀 */}
            <div className="text-white fw-bold mb-4" style={{ position: "absolute", top: "20px", left: "20px" }}>
              Order Net
            </div>

            {/* 탭 버튼 */}
            <div className="btn-group w-100 mb-4" role="group">
              {tabs.map((tab) => (
                  <input
                      type="radio"
                      className="btn-check"
                      name="options"
                      id={tab}
                      key={tab}
                      checked={selectedTab === tab}
                      onChange={() => setSelectedTab(tab)}
                  />
              ))}
              {tabs.map((tab) => (
                  <label
                      key={tab}
                      className={`btn btn-outline-secondary ${selectedTab === tab ? "active" : ""}`}
                      htmlFor={tab}
                      style={{ fontWeight: "bold" }}
                  >
                    {tab}
                  </label>
              ))}
            </div>

            {/* 아이디 입력 */}
            <div className="input-group mb-3">
            <span className="input-group-text bg-light" style={{ minWidth: "50px", justifyContent: "center" }}>
              <User size={20} />
            </span>
              <input
                  type="text"
                  className="form-control bg-light"
                  placeholder="LoginCode"
                  style={{ border: "none" }}
                  disabled
              />
            </div>

            {/* 비밀번호 입력 */}
            <div className="input-group mb-4">
            <span className="input-group-text bg-light" style={{ minWidth: "50px", justifyContent: "center" }}>
              <Lock size={20} />
            </span>
              <input
                  type="password"
                  className="form-control bg-light"
                  value="************"
                  style={{ border: "none" }}
                  disabled
              />
            </div>

            {/* 로그인 버튼 */}
            <button
                className="btn btn-light w-100 fw-bold"
                style={{
                  border: "1px solid #ccc",
                  color: "#333",
                }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
  );
}

export default Login;

