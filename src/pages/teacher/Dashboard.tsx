export default function TeacherDashboard() {
  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>Chào mừng giáo viên!</p>

      <div style={statsContainerStyle}>
        <div style={statCardStyle}>
          <h3>📚 Bài giảng của tôi</h3>
          <p style={statNumberStyle}>15</p>
        </div>
        <div style={statCardStyle}>
          <h3>🎓 Khóa học</h3>
          <p style={statNumberStyle}>3</p>
        </div>
        <div style={statCardStyle}>
          <h3>👨‍🎓 Học viên</h3>
          <p style={statNumberStyle}>45</p>
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
  color: "#28a745",
  margin: 0,
};
