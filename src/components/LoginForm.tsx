// src/components/LoginForm.tsx
import { authApi } from '../api/auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    // Giả sử bạn lấy dữ liệu từ form
    const loginData = { username: 'testuser', password: '123' };

    try {
      const response = await authApi.login(loginData);
      
      if (response.success && response.data) {
        // Lưu token theo yêu cầu (Save token)
        localStorage.setItem('accessToken', response.data.accessToken);
        
        // Chuyển hướng (Redirect to /courses)
        navigate('/courses');
      } else {
        alert(response.message || 'Đăng nhập thất bại');
      }
    } catch (error) {
      console.error("Lỗi kết nối API:", error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Các ô input username/password */}
      <button type="submit">Đăng nhập</button>
    </form>
  );
};