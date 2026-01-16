import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function LessonEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!id) return;

    // Demo data (sau này nối API)
    setTitle("Demo Lesson " + id);
    setLevel("Intermediate");
    setPrice(299000);
    setDescription("Mô tả demo cho lesson " + id);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Update lesson:", { id, title, level, price, description });

    alert("✅ Cập nhật bài học thành công (demo)");
    navigate("/admin/lessons");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>✏️ Admin - Cập nhật bài học</h2>

      <div style={{ margin: "12px 0" }}>
        <Link to="/admin/lessons">⬅ Quay lại danh sách</Link>
      </div>

      <p>
        Đang sửa Lesson ID: <b>{id}</b>
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        <div style={{ marginTop: 12 }}>
          <label>Tên bài học</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tên bài học..."
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Trình độ</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)} style={inputStyle}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Giá (VND)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <label>Mô tả</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ ...inputStyle, height: 90 }}
          />
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
          <button type="submit" style={btnStyle}>
            Lưu cập nhật
          </button>

          <button type="button" style={btnStyle} onClick={() => navigate("/admin/lessons")}>
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 10,
  marginTop: 6,
  border: "1px solid #ccc",
  borderRadius: 6,
};

const btnStyle: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};
