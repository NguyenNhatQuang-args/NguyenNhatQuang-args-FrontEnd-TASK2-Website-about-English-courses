import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Định nghĩa các roles
export type UserRole = "admin" | "teacher" | "user";

// Định nghĩa User interface
export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  permissions?: string[];
}

// Định nghĩa AuthContext interface
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  hasRole: (role: UserRole | UserRole[]) => boolean;
  hasPermission: (permission: string) => boolean;
}

// Tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check localStorage khi app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("access_token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
      }
    }
    setIsLoading(false);
  }, []);

  // Hàm login - gọi API thực tế
  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

      const response = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // Lưu token và user info
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token);

      // Lấy thông tin user từ response hoặc gọi API profile
      const userInfo: User = {
        id: data.user?.id || 1,
        username: data.user?.username || username,
        email: data.user?.email || "",
        role: data.user?.role?.name || "user",
        permissions: data.user?.permissions || [],
      };

      localStorage.setItem("user", JSON.stringify(userInfo));
      setUser(userInfo);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  // Hàm logout
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  // Check role
  const hasRole = (role: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    if (Array.isArray(role)) {
      return role.includes(user.role);
    }
    return user.role === role;
  };

  // Check permission
  const hasPermission = (permission: string): boolean => {
    if (!user) return false;
    // Admin có tất cả quyền
    if (user.role === "admin") return true;
    return user.permissions?.includes(permission) || false;
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    hasRole,
    hasPermission,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook để sử dụng AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
