import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LessonCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // FE demo: chỉ log ra trước, sau này nối API
    console.log("Create lesson:", { title, level, price });

    alert("Tạo bài học thành công (demo) ✅");
    navigate("/admin/lessons");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>➕ Admin - Tạo bài học</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: 500 }}>
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
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={inputStyle}
          >
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

        <div style={{ marginTop: 16 }}>
          <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
            Lưu bài học
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
};
