import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getDefaultRouteForRole } from "../components/ProtectedRoute";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(username, password);

      if (success) {
        // Lấy user từ localStorage để biết role
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          // Chuyển đến trang mặc định theo role
          navigate(getDefaultRouteForRole(user.role), { replace: true });
        }
      } else {
        setError("Tên đăng nhập hoặc mật khẩu không đúng!");
      }
    } catch {
      setError("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>🎓 Đăng nhập</h2>

        {error && <div style={errorStyle}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Tên đăng nhập</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <div style={infoStyle}>
          <p style={{ marginBottom: 10 }}>
            <strong>Tài khoản test:</strong>
          </p>
          <p>Admin: admin / admin@123</p>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
};

const cardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "400px",
};

const titleStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: "30px",
  color: "#333",
};

const formGroupStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "8px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  marginTop: "10px",
};

const errorStyle: React.CSSProperties = {
  backgroundColor: "#ffe6e6",
  color: "#d00",
  padding: "12px",
  borderRadius: "4px",
  marginBottom: "20px",
  textAlign: "center",
};

const infoStyle: React.CSSProperties = {
  marginTop: "30px",
  padding: "15px",
  backgroundColor: "#f8f9fa",
  borderRadius: "4px",
  fontSize: "14px",
  color: "#666",
};
