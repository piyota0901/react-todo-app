import React from 'react';
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  return (
    <Layout style={{ display: 'flex', minHeight: '100vh' }}>
      <Header style={{ alignItems: 'center' }}></Header>
      <Content style={{ flex: 1, display: 'flex' }}>
        <div style={{ padding: '24px' }}>Content</div>
      </Content>
      <Footer style={{ textAlign: 'center', height: 64 }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
