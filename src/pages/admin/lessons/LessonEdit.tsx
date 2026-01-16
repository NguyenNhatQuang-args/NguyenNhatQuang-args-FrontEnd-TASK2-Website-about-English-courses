import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function LessonEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [price, setPrice] = useState<number>(0);

  // Demo: giả lập lấy data theo id
  useEffect(() => {
    if (!id) return;

    // Fake data (sau này thay bằng gọi API)
    setTitle("Demo Lesson " + id);
    setLevel("Intermediate");
    setPrice(299000);
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Update lesson:", { id, title, level, price });

    alert("Cập nhật bài học thành công (demo) ✅");
    navigate("/admin/lessons");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>✏️ Admin - Cập nhật bài học</h2>
      <p>
        Đang sửa Lesson ID: <b>{id}</b>
      </p>

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

        <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
          <button type="submit" style={btnPrimary}>
            Lưu cập nhật
          </button>

          <button
            type="button"
            style={btnSecondary}
            onClick={() => navigate("/admin/lessons")}
          >
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
};

const btnPrimary: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "8px 12px",
  cursor: "pointer",
};
