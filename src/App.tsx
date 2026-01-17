import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import ProtectedRoute, { getDefaultRouteForRole } from "./components/ProtectedRoute";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import UserLayout from "./layouts/UserLayout";

// Public pages
import Login from "./pages/Login";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import LessonList from "./pages/admin/lessons/LessonList";
import LessonCreate from "./pages/admin/lessons/LessonCreate";
import LessonEdit from "./pages/admin/lessons/LessonEdit";
import LessonDetail from "./pages/admin/lessons/LessonDetail";

// Teacher pages
import TeacherDashboard from "./pages/teacher/Dashboard";

// User pages
import UserHome from "./pages/user/Home";

// Component chuyển hướng tự động theo role
function RoleBasedRedirect() {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return <div style={{ padding: 20 }}>Đang tải...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Chuyển đến trang mặc định theo role
  return <Navigate to={getDefaultRouteForRole(user!.role)} replace />;
}

// RouterApp - Component chính quản lý routing theo role
function RouterApp() {
  return (
    <Routes>
      {/* ========== PUBLIC ROUTES ========== */}
      <Route path="/login" element={<Login />} />

      {/* ========== ROOT REDIRECT ========== */}
      <Route path="/" element={<RoleBasedRedirect />} />

      {/* ========== ADMIN ROUTES ========== */}
      {/* Chỉ admin mới truy cập được */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/lessons" element={<LessonList />} />
          <Route path="/admin/lessons/create" element={<LessonCreate />} />
          <Route path="/admin/lessons/edit/:id" element={<LessonEdit />} />
          <Route path="/admin/lessons/:id" element={<LessonDetail />} />
          {/* Thêm các route admin khác ở đây */}
          <Route path="/admin/users" element={<div>Quản lý Users (Coming soon)</div>} />
          <Route path="/admin/roles" element={<div>Quản lý Roles (Coming soon)</div>} />
          <Route path="/admin/permissions" element={<div>Permissions (Coming soon)</div>} />
          <Route path="/admin/courses" element={<div>Quản lý Courses (Coming soon)</div>} />
        </Route>
      </Route>

      {/* ========== TEACHER ROUTES ========== */}
      {/* Admin và Teacher đều truy cập được */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "teacher"]} />}>
        <Route element={<TeacherLayout />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/lessons" element={<div>Bài giảng của tôi (Coming soon)</div>} />
          <Route path="/teacher/lessons/create" element={<div>Tạo bài giảng (Coming soon)</div>} />
          <Route path="/teacher/courses" element={<div>Khóa học của tôi (Coming soon)</div>} />
          <Route path="/teacher/students" element={<div>Học viên (Coming soon)</div>} />
        </Route>
      </Route>

      {/* ========== USER ROUTES ========== */}
      {/* Tất cả roles đều truy cập được */}
      <Route element={<ProtectedRoute allowedRoles={["admin", "teacher", "user"]} />}>
        <Route element={<UserLayout />}>
          <Route path="/home" element={<UserHome />} />
          <Route path="/courses" element={<div>Danh sách khóa học (Coming soon)</div>} />
          <Route path="/my-courses" element={<div>Khóa học của tôi (Coming soon)</div>} />
          <Route path="/profile" element={<div>Hồ sơ cá nhân (Coming soon)</div>} />
        </Route>
      </Route>

      {/* ========== 404 NOT FOUND ========== */}
      <Route path="*" element={<h2 style={{ padding: 20 }}>404 - Không tìm thấy trang</h2>} />
    </Routes>
  );
}

// App component - Wrap với AuthProvider
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </BrowserRouter>
  );
}
