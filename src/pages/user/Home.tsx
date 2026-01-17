export default function UserHome() {
  return (
    <div>
      <h1>Chào mừng đến với English Courses!</h1>
      <p>Khám phá các khóa học tiếng Anh chất lượng cao.</p>

      <div style={featuredStyle}>
        <h2>Khóa học nổi bật</h2>
        <div style={coursesGridStyle}>
          <div style={courseCardStyle}>
            <h3>🔤 TOEIC 700+</h3>
            <p>Luyện thi TOEIC đạt 700+ điểm</p>
            <button style={enrollBtnStyle}>Xem chi tiết</button>
          </div>
          <div style={courseCardStyle}>
            <h3>💬 Giao tiếp cơ bản</h3>
            <p>Học tiếng Anh giao tiếp từ đầu</p>
            <button style={enrollBtnStyle}>Xem chi tiết</button>
          </div>
          <div style={courseCardStyle}>
            <h3>📝 IELTS Writing</h3>
            <p>Kỹ năng viết IELTS band 6.5+</p>
            <button style={enrollBtnStyle}>Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const featuredStyle: React.CSSProperties = {
  marginTop: "40px",
};

const coursesGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const courseCardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const enrollBtnStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "10px",
};
