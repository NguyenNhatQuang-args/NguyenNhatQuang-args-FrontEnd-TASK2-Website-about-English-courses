import React from "react";
import { Link } from "react-router-dom";

type Lesson = {
  id: number;
  title: string;
  level: string;
  price: number;
};

const fakeLessons: Lesson[] = [
  { id: 1, title: "Basic English for Beginners", level: "Beginner", price: 199000 },
  { id: 2, title: "English Communication", level: "Intermediate", price: 299000 },
  { id: 3, title: "IELTS Foundation", level: "Advanced", price: 499000 },
];

export default function LessonList() {
  return (
    <div style={{ padding: 20 }}>
      <h2>📚 Admin - Danh sách bài học</h2>

      <div style={{ margin: "12px 0" }}>
        <Link to="/admin/lessons/create">
          <button style={{ padding: "8px 12px", cursor: "pointer" }}>
            ➕ Tạo bài học mới
          </button>
        </Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Tên bài học</th>
            <th style={thStyle}>Trình độ</th>
            <th style={thStyle}>Giá</th>
            <th style={thStyle}>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {fakeLessons.map((lesson) => (
            <tr key={lesson.id}>
              <td style={tdStyle}>{lesson.id}</td>
              <td style={tdStyle}>{lesson.title}</td>
              <td style={tdStyle}>{lesson.level}</td>
              <td style={tdStyle}>{lesson.price.toLocaleString("vi-VN")}đ</td>
              <td style={tdStyle}>
                <Link to={`/admin/lessons/${lesson.id}`}>
                  <button style={btnStyle}>Xem</button>
                </Link>

                <Link to={`/admin/lessons/edit/${lesson.id}`}>
                  <button style={{ ...btnStyle, marginLeft: 8 }}>Sửa</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: 10,
  textAlign: "left",
  background: "#f5f5f5",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: 10,
};

const btnStyle: React.CSSProperties = {
  padding: "6px 10px",
  cursor: "pointer",
};
