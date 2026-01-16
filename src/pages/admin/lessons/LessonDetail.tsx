import { Link, useParams } from "react-router-dom";

export default function LessonDetail() {
  const { id } = useParams();

  // Fake data (sau này đổi thành gọi API)
  const lesson = {
    id,
    title: "Demo Lesson " + id,
    level: "Intermediate",
    price: 299000,
    description: "Đây là mô tả demo cho bài học.",
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>📌 Admin - Chi tiết bài học</h2>

      <div style={{ marginTop: 12, lineHeight: 1.8 }}>
        <p>
          <b>ID:</b> {lesson.id}
        </p>
        <p>
          <b>Tên bài học:</b> {lesson.title}
        </p>
        <p>
          <b>Trình độ:</b> {lesson.level}
        </p>
        <p>
          <b>Giá:</b> {lesson.price.toLocaleString("vi-VN")}đ
        </p>
        <p>
          <b>Mô tả:</b> {lesson.description}
        </p>
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
        <Link to={`/admin/lessons/edit/${lesson.id}`}>
          <button style={btnPrimary}>Sửa</button>
        </Link>

        <Link to="/admin/lessons">
          <button style={btnSecondary}>Quay lại danh sách</button>
        </Link>
      </div>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};
