import { Menu, type MenuProps } from "antd";
import { UserOutlined, SafetyOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "../style/Slidebar.module.css";

const items: MenuProps["items"] = [
  { key: "/admin/roles", icon: <SafetyOutlined />, label: "Quyền" },
  { key: "/admin/users", icon: <UserOutlined />, label: "Tài khoản" },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey = items
    ?.map((i) => i?.key as string)
    .find((key) => location.pathname.startsWith(key));

  return (
    <> 
        <h1 className={styles.tilte}>Admin</h1>
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKey ? [selectedKey] : []}
            onClick={({ key }) => navigate(key as string)}
            items={items}
        />
    </>
    
  );
};

export default Sidebar;
