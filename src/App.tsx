import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LessonList from "./pages/admin/lessons/LessonList";
import LessonCreate from "./pages/admin/lessons/LessonCreate";
import LessonEdit from "./pages/admin/lessons/LessonEdit";
import LessonDetail from "./pages/admin/lessons/LessonDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ vào / sẽ tự nhảy qua trang list */}
        <Route path="/" element={<Navigate to="/admin/lessons" replace />} />

        <Route path="/admin/lessons" element={<LessonList />} />
        <Route path="/admin/lessons/create" element={<LessonCreate />} />
        <Route path="/admin/lessons/edit/:id" element={<LessonEdit />} />
        <Route path="/admin/lessons/:id" element={<LessonDetail />} />

        {/* ✅ nếu gõ sai link */}
        <Route path="*" element={<h2 style={{ padding: 20 }}>404 Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
