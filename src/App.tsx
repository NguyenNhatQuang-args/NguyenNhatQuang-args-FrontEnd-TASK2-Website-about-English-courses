import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SentenceBuilder from './components/SentenceBuilder/SentenceBuilder';
import './App.css';

interface User {
  id: string;
  username: string;
  fullname: string;
  email: string;
  role: string;
}

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (data: { user: unknown; accessToken: string }) => {
    setUser(data.user as User);
    setToken(data.accessToken);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
  };

  if (user && token) {
    return (
      <div className="app">
        <SentenceBuilder />
        <div className="dashboard">
          <h1>Xin chào, {user.fullname}!</h1>
          <div className="user-info">
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>ID:</strong> {user.id}</p>
          </div>
          <div className="token-info">
            <h3>Access Token:</h3>
            <textarea readOnly value={token} rows={4} />
          </div>
          <button onClick={handleLogout} className="logout-btn">
            Đăng xuất
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Backend API Demo</h1>
      {isLogin ? (
        <LoginForm
          onSuccess={handleLoginSuccess}
          onSwitchToRegister={() => setIsLogin(false)}
        />
      ) : (
        <RegisterForm
          onSuccess={() => setIsLogin(true)}
          onSwitchToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
}

export default App;
