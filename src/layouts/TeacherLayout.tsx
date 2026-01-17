import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function TeacherLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <div style={logoStyle}>
          <h2 style={{ margin: 0, color: "#fff" }}>📖 Teacher Portal</h2>
        </div>

        <nav style={navStyle}>
          <p style={navTitleStyle}>GIẢNG DẠY</p>

          <Link to="/teacher/dashboard" style={linkStyle}>
            📊 Dashboard
          </Link>

          <Link to="/teacher/lessons" style={linkStyle}>
            📚 Bài giảng của tôi
          </Link>

          <Link to="/teacher/lessons/create" style={linkStyle}>
            ➕ Tạo bài giảng mới
          </Link>

          <p style={navTitleStyle}>KHÓA HỌC</p>

          <Link to="/teacher/courses" style={linkStyle}>
            🎓 Khóa học của tôi
          </Link>

          <Link to="/teacher/students" style={linkStyle}>
            👨‍🎓 Học viên
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div style={mainStyle}>
        {/* Header */}
        <header style={headerStyle}>
          <h3 style={{ margin: 0 }}>Teacher Portal</h3>

          <div style={userInfoStyle}>
            <span>
              👤 {user?.username} ({user?.role})
            </span>
            <button onClick={handleLogout} style={logoutBtnStyle}>
              Đăng xuất
            </button>
          </div>
        </header>

        {/* Page content */}
        <main style={contentStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  minHeight: "100vh",
};

const sidebarStyle: React.CSSProperties = {
  width: "250px",
  backgroundColor: "#16213e",
  color: "#fff",
  position: "fixed",
  height: "100vh",
  overflowY: "auto",
};

const logoStyle: React.CSSProperties = {
  padding: "20px",
  borderBottom: "1px solid #333",
  textAlign: "center",
};

const navStyle: React.CSSProperties = {
  padding: "20px 0",
};

const navTitleStyle: React.CSSProperties = {
  color: "#888",
  fontSize: "12px",
  padding: "10px 20px",
  margin: 0,
  textTransform: "uppercase",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  color: "#fff",
  textDecoration: "none",
  padding: "12px 20px",
  transition: "background 0.2s",
};

const mainStyle: React.CSSProperties = {
  marginLeft: "250px",
  flex: 1,
  backgroundColor: "#f0f4f8",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const userInfoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const logoutBtnStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#dc3545",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const contentStyle: React.CSSProperties = {
  padding: "30px",
};
