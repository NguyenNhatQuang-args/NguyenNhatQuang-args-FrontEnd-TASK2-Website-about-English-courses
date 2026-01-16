import { BrowserRouter, Routes, Route } from "react-router-dom";
import LessonList from "./pages/admin/lessons/LessonList";
import LessonCreate from "./pages/admin/lessons/LessonCreate";
import LessonEdit from "./pages/admin/lessons/LessonEdit";
import LessonDetail from "./pages/admin/lessons/LessonDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/lessons" element={<LessonList />} />
        <Route path="/admin/lessons/create" element={<LessonCreate />} />
        <Route path="/admin/lessons/edit/:id" element={<LessonEdit />} />
        <Route path="/admin/lessons/:id" element={<LessonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
