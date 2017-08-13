
import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Icon ,Button,Avatar} from 'antd';
import './style.css';
const { Header, Sider, Content ,Footer} = Layout;
const { SubMenu } = Menu;
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import MyTable from './table.jsx';
import MyCalendar from './calendar.jsx';
import PersonalInformation from './timeline.jsx';

class SiderDemo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
          collapsed: false,
          username:'QiZheng',
          information:'个人经历'
        };
    this.handleClick=this.handleClick.bind(this);
	}

  handleClick = (e) => {
    console.log(e);
    if(e.key==5){
      this.setState({
        username: 'none'
      });
    }
  }

  setStateleClick = (e) => {
    console.log(e);
    if(e.key==1){
      this.setState({
        information: '个人经历'
      });      
    }
    if(e.key==2){
      this.setState({
        information: '个人日历（支持添加事件）'
      });      
    }
    if(e.key==3){
      this.setState({
        information: '个人图表'
      });      
    }
    if(e.key==4){
      this.setState({
        information: 'Fetch存取数据'
      });      
    }
  }
  
  
  toggle(e){
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  
  render() {
    console.log(this.state.username);
    return (
      <Layout style={{height:'100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <img src=' ./images/logo.png' width="50" id="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.setStateleClick}>
            <Menu.Item key="1" >
              <Link to="/myPersonal" ><Icon type="user" style={{marginRight:5}}/>
              <span> 个人经历</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/myCalendar" ><Icon type="calendar" style={{marginRight:5}}/>
              <span> 日历</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/myCharts" ><Icon type="dot-chart"style={{marginRight:5}} />
              <span> 图表</span></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/myFetch" ><Icon type="download" style={{marginRight:5}}/>
              <span> Fetch存取数据</span></Link>
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
            <span style={{color:'#108ee9'}}>{this.state.information}</span>
            <Menu mode="horizontal" style={{float:'right',marginRight:15}} onClick={this.handleClick}>
              <SubMenu title={<span><Icon type="user" />{this.state.username}</span>}>
                              <Menu.Item key="4" >个人中心</Menu.Item>
                              <Menu.Item key="5" >退出</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ margin: '24px 16px 12px 16px', padding: 24, background: '#fff', minHeight: 280 ,overflow:'auto'}}>
          
            { this.props.children }
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React-Demo ©2016 Created by QiZheng
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;