import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import type { UserRole } from "../contexts/AuthContext";

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

export default function ProtectedRoute({
  allowedRoles,
  redirectTo = "/login",
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Đang loading, hiển thị loading state
  if (isLoading) {
    return (
      <div style={loadingStyle}>
        <p>Đang tải...</p>
      </div>
    );
  }

  // Chưa đăng nhập, chuyển về trang login
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Nếu có yêu cầu role cụ thể, check xem user có quyền không
  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    // Chuyển về trang mặc định của role hiện tại
    return <Navigate to={getDefaultRouteForRole(user.role)} replace />;
  }

  // Có quyền, render children
  return <Outlet />;
}

// Hàm lấy route mặc định theo role
export function getDefaultRouteForRole(role: UserRole): string {
  switch (role) {
    case "admin":
      return "/admin/dashboard";
    case "teacher":
      return "/teacher/dashboard";
    case "user":
    default:
      return "/home";
  }
}

const loadingStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  fontSize: "18px",
};
