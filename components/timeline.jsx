import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Icon ,Card,Row, Col } from 'antd';

class PersonalInformation extends React.Component {
	constructor(props){
		super(props);
		
	}
  
  
  render() {
    return (
	    <Row className="animated zoomIn" gutter={16}>
	      <Col className="gutter-row" span={12}>
			  <Card title="个人信息－郑琪" style={{marginBottom:40}}>
			      <p><span style={{marginRight:40}}><Icon type="calendar" style={{ fontSize: '14px' , color: '#108ee9',marginRight:5}} />出生日期：</span>1993-08-05</p>
			      <p><span style={{marginRight:40}}><Icon type="shop" style={{ fontSize: '14px' , color: '#108ee9',marginRight:5}} />毕业院校：</span>北京邮电大学</p>
			      <p><span style={{marginRight:40}}><Icon type="mobile" style={{ fontSize: '14px' , color: '#108ee9',marginRight:5}} />联系电话：</span>182-0165-4212</p>
						<p><span style={{marginRight:40}}><Icon type="mail" style={{ fontSize: '14px' , color: '#108ee9',marginRight:5}} />邮箱：</span>zheng_qi@bupt.edu.cn</p>
			   </Card>
			   <Card title="个人技能" style={{marginBottom:40}}>
			      <p><Icon type="check" style={{ fontSize: '16px' , color: '#108ee9'}} />能熟练运用HTML5+CSS3布局，能利用Axure制作原型图，有与设计师沟通的经验，能快速理解设计师的设计效果并能准确快速的用代码实现；</p>
						<p><Icon type="check" style={{ fontSize: '16px' , color: '#108ee9'}} />熟悉JavaScript面向对象编程, 并能熟练使用JQuery进行动态网页开发；</p>
						<p><Icon type="check" style={{ fontSize: '16px' , color: '#108ee9'}} />熟悉使用webpack构建工具，熟练运用主流JS库和CSS开发框架，React和Bootstrap，有实际开发经验。</p>
						<p><Icon type="check" style={{ fontSize: '16px' , color: '#108ee9'}} />熟悉使用ES6进行开发。</p>

			   </Card>
		   </Col>
			 <Col className="gutter-row" span={10}>
				<Card title="项目&实习经历">
						<Timeline>
							<Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">IBM中国研发中心（GBS） 
							<span style={{color:'#108ee9'}}>2017.07 - 至今</span></Timeline.Item>
							<Timeline.Item>搜狐集团-网络运营部  <span style={{color:'#108ee9'}}>2017.02 - 2017.06</span></Timeline.Item>
							<Timeline.Item>基于大数据的培训“互联网+”人才测评系统  <span style={{color:'#108ee9'}}>2015.12 - 2016.12</span></Timeline.Item>
							<Timeline.Item>北邮羽毛球馆预约系统  <span style={{color:'#108ee9'}}>2015.09 - 2015.12</span></Timeline.Item>
							<Timeline.Item>UC浏览器－书旗小说网  <span style={{color:'#108ee9'}}>2015.03 - 2015.06</span></Timeline.Item>
							
							
							
					</Timeline>
				</Card>
			 </Col>
		    
		</Row>
    );
  }
}

export default PersonalInformation;