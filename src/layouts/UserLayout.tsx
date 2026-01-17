import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function UserLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>
          <h2 style={{ margin: 0 }}>🎓 English Courses</h2>
        </div>

        <nav style={navStyle}>
          <Link to="/home" style={navLinkStyle}>
            Trang chủ
          </Link>
          <Link to="/courses" style={navLinkStyle}>
            Khóa học
          </Link>
          <Link to="/my-courses" style={navLinkStyle}>
            Khóa học của tôi
          </Link>
          <Link to="/profile" style={navLinkStyle}>
            Hồ sơ
          </Link>
        </nav>

        <div style={userInfoStyle}>
          <span>
            👤 {user?.username}
          </span>
          <button onClick={handleLogout} style={logoutBtnStyle}>
            Đăng xuất
          </button>
        </div>
      </header>

      {/* Main content */}
      <main style={mainStyle}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© 2024 English Courses. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "#fff",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px",
};

const navLinkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  transition: "background 0.2s",
};

const userInfoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const logoutBtnStyle: React.CSSProperties = {
  padding: "8px 16px",
  backgroundColor: "#e74c3c",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  padding: "30px",
  backgroundColor: "#ecf0f1",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#2c3e50",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};
