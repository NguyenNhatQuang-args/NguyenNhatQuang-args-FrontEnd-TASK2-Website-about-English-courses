import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./layout/Adminlayout";
import Roles from "./pages/Admin/Roles";
import User from "./pages/Admin/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/roles" />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="roles" element={<Roles />} />
          <Route path="users" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
