import { Home, LogOut } from "lucide-react";

function Topbar() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between px-4 border-bottom">
            <span className="text-muted small">2025.04.10 12:24:05</span>
            <div className="d-flex align-items-center gap-3">
                <span className="fw-bold">홍길동 님</span>
                <Home className="me-2 cursor-pointer" />
                <LogOut className="cursor-pointer" />
            </div>
        </nav>
    );

}

export default Topbar