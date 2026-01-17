const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

/**
 * Định nghĩa các kiểu dữ liệu gửi đi (Request)
 */
export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  fullname: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  password: string;
}

/**
 * Định nghĩa cấu trúc phản hồi từ NestJS (Response)
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: string;
      username: string;
      fullname: string;
      email: string;
      role: string;
    };
    accessToken: string;
    refreshToken: string;
  };
  errors?: Array<{ field: string; message: string }>;
}

/**
 * Đối tượng chứa các hàm gọi API xác thực
 */
export const authApi = {
  /**
   * Đăng nhập người dùng
   * Luồng: Gửi username/password -> Nhận token -> Lưu token vào localStorage
   */
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: AuthResponse = await response.json();

      // Lưu token tự động nếu đăng nhập thành công
      if (result.success && result.data?.accessToken) {
        localStorage.setItem('accessToken', result.data.accessToken);
        localStorage.setItem('refreshToken', result.data.refreshToken);
      }

      return result;
    } catch (error) {
      console.error('Login API Error:', error);
      throw error;
    }
  },

  /**
   * Đăng ký người dùng mới
   */
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (error) {
      console.error('Register API Error:', error);
      throw error;
    }
  },

  /**
   * Đăng xuất: Xóa thông tin xác thực cục bộ
   */
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  },

  /**
   * Kiểm tra xem người dùng đã đăng nhập chưa
   */
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem('accessToken');
  }
};