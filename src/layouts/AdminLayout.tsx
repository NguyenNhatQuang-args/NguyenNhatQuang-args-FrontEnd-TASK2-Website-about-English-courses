import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminLayout() {
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
          <h2 style={{ margin: 0, color: "#fff" }}>🛡️ Admin Panel</h2>
        </div>

        <nav style={navStyle}>
          <p style={navTitleStyle}>QUẢN LÝ</p>

          <Link to="/admin/dashboard" style={linkStyle}>
            📊 Dashboard
          </Link>

          <Link to="/admin/users" style={linkStyle}>
            👥 Quản lý Users
          </Link>

          <Link to="/admin/roles" style={linkStyle}>
            🔐 Quản lý Roles
          </Link>

          <Link to="/admin/permissions" style={linkStyle}>
            🔑 Permissions
          </Link>

          <p style={navTitleStyle}>NỘI DUNG</p>

          <Link to="/admin/lessons" style={linkStyle}>
            📚 Quản lý Lessons
          </Link>

          <Link to="/admin/courses" style={linkStyle}>
            🎓 Quản lý Courses
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div style={mainStyle}>
        {/* Header */}
        <header style={headerStyle}>
          <h3 style={{ margin: 0 }}>Admin Dashboard</h3>

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
  backgroundColor: "#1a1a2e",
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
  backgroundColor: "#f5f5f5",
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
