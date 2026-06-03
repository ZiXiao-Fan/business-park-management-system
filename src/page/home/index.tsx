import { Layout,theme } from 'antd';
import { useState } from 'react';
import MyBreadCrumb from '../../components/breadCrumb';
import MyHeader from '../../components/header';
import NavLeft from '../../components/navLeft';
import { Outlet } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;



function Home(){
    const [collapsed, setCollapsed] = useState(false);
    const {
    token: { colorBgContainer},
  } = theme.useToken();
    return <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <NavLeft/>
            </Sider>
            <Layout>
                <Header style={{ paddingRight: 20,background: colorBgContainer, textAlign:'right'}} >
                    <MyHeader />
                </Header>
                <Content style={{ margin: '0 16px',height:"90vh",overflowY:"auto",overflowX:"hidden" }}>
                    <MyBreadCrumb/>
                     <Outlet/>
                <div
                    style={{
                    padding: 24,
                    minHeight: 360,
                    }}
                >
                </div>
               
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
            </Layout>
        
            
    
}

export default Home