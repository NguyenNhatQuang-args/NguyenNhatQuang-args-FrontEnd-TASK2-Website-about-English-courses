export default function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Chào mừng đến trang quản trị!</p>

      <div style={statsContainerStyle}>
        <div style={statCardStyle}>
          <h3>👥 Users</h3>
          <p style={statNumberStyle}>150</p>
        </div>
        <div style={statCardStyle}>
          <h3>📚 Lessons</h3>
          <p style={statNumberStyle}>45</p>
        </div>
        <div style={statCardStyle}>
          <h3>🎓 Courses</h3>
          <p style={statNumberStyle}>12</p>
        </div>
        <div style={statCardStyle}>
          <h3>👨‍🏫 Teachers</h3>
          <p style={statNumberStyle}>8</p>
        </div>
      </div>
    </div>
  );
}

const statsContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const statCardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const statNumberStyle: React.CSSProperties = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#007bff",
  margin: 0,
};
