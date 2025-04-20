import { Home, LogOut } from "lucide-react";

function Topbar() {
    return (
        <nav className="navbar navbar-light justify-content-between px-4 border-bottom"
             style={{height: "60px", backgroundColor: '#343a40'}}>
            {/*<span className="text-primary small">계약실적관리</span>*/}
                        <span
                            className="px-3 py-1 fw-bold"
                            style={{
                                backgroundColor: '#ffffff',  // 흰색 배경
                                color: '#333',               // 어두운 텍스트 색상
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px',
                                border: '1px solid white',   // 연한 테두리 (선택)
                                height: "52px",
                                fontSize: '14px',
                                display: 'inline-block',
                                borderBottom: 'none',
                            }}
                        >
              계약실적관리
            </span>


            <div className="d-flex align-items-center gap-3">
                <span className="fw-bold text-primary">홍길동 님</span>
                <Home className="me-2 cursor-pointer text-primary"/>
                <LogOut className="cursor-pointer text-primary"/>
            </div>
        </nav>
    )
        ;

}

export default Topbar