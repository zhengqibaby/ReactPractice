
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon } from 'antd';
import './style.css';
const { Header, Sider, Content ,Footer} = Layout;
const { SubMenu } = Menu;
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import MyTable from './table.jsx';
import MyForm from './form.jsx';

class SiderDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
          collapsed: false,
        };
	}
  
  toggle(e){
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout style={{height:'100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span><Link to="/myTable">表格</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span><Link to="/myForm">表单</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle.bind(this)}
            />
            <Menu mode="horizontal" style={{float:'right'}}>
              <SubMenu title={<span><Icon type="user" />QiZheng</span>}>
                              <Menu.Item key="4">退出</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            { this.props.children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;