import React from "react";
import { Link, useParams } from "react-router-dom";

export default function LessonDetail() {
  const { id } = useParams();

  // Demo data (sau này gọi API)
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

      <div style={{ margin: "12px 0" }}>
        <Link to="/admin/lessons">⬅ Quay lại danh sách</Link>
      </div>

      <div style={cardStyle}>
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
          <button style={btnStyle}>Sửa</button>
        </Link>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: 14,
  borderRadius: 8,
  marginTop: 10,
  maxWidth: 520,
};

const btnStyle: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};
