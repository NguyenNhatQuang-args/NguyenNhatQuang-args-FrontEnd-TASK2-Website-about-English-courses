import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Slidebar";
import styles from "../style/Adminloyout.module.css";

const { Sider, Content } = Layout;

export default function AdminLayout() {
  return (
    <Layout className={styles.root}>
      <Sider
        width={256}
        breakpoint="lg"
        collapsedWidth={80}
        theme="dark"
        className={styles.sider}
      >
        <Sidebar />
      </Sider>

      <Layout className={styles.main}>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
