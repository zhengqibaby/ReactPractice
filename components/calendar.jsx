import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar , Button , Form, Input, Select} from 'antd';
import Rodal from 'rodal';
import './rodal.css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const FormItem = Form.Item;
const Option = Select.Option;

class MyCalendar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
            calendarData: [
            {myData: 8, dayEvent:[
	        { type: 'warning', content: 'This is warning event.' },
	        { type: 'normal', content: 'This is usual event.' },
	        { type: 'error', content: 'This is error event 1.' }]},
	        {myData: 10, dayEvent:[
	        { type: 'warning', content: 'This is warning event.' },
	        { type: 'normal', content: 'This is usual event.' }]},
	        {myData: 15, dayEvent:[
	        { type: 'warning', content: 'This is warning event.' },
	        { type: 'normal', content: 'This is usual event.' }]} ],
	        visible: false,
	        animation: 'zoom',
	        currentDayFormat:'',
	        currentDay:'',
	        currentSelected:'',
	        currentAddEvent:''
        }

		this.dateCellRender=this.dateCellRender.bind(this);
		this.monthCellRender=this.monthCellRender.bind(this);
		this.onSelect=this.onSelect.bind(this);
	}

	show (animation) {
        this.setState({
            
            visible: true
        });
    }

    hide() {
        this.setState({ visible: false });
    }
  
  getListData(value) {
  	
	  let listData;

	  this.state.calendarData.map(function(item){
	  	if(item.myData==value.date()){
	  		listData = item.dayEvent;
	  	}
	  }
	 );
	  		  
	  return listData || [];
	}

	dateCellRender(value) {
		
	  const listData = this.getListData(value);
	 // console.log(listData);
	  return (
	    <ul className="events">
	      {
	        listData.map(item => (
	          <li key={item.content}>
	            <span className={`event-${item.type}`}>●</span>
	            {item.content}
	          </li>
	        ))
	      }
	    </ul>
	  );
	}

	getMonthData(value) {
	  if (value.month() === 8) {
	    return 1394;
	  }
	}

	monthCellRender(value) {
	  const num = this.getMonthData(value);
	  return num ? <div className="notes-month">
	    <section>{num}</section>
	    <span>Backlog number</span>
	  </div> : null;
	}

	onSelect(value){
		
		this.setState({
	      currentDayFormat: value.format('YYYY-MM-DD'),
	      currentDay:value

	    });
	    
	}

	selectValue(value){

		console.log(value);
		this.setState({ currentSelected: value });
	}

	submitEvent(){
		
		let inputValue = ReactDOM.findDOMNode(this.refs.addEvent).value;
		if (inputValue!='') {
			this.hide();
			this.setState({ currentAddEvent: inputValue },function(){
				this.state.calendarData.push({myData:this.state.currentDay.date(),dayEvent:[
		        { type: this.state.currentSelected , content: this.state.currentAddEvent }] });
		        console.log(this.state.calendarData)
		        this.onSelect(this.state.currentDay);
			});
		};
		
		
		
	}
  
  render() {
    return (
    	<div>
	    	<Button type="primary" onClick={this.show.bind(this)} disabled={this.state.currentDay!=''?false:true}>选中日期后添加事件</Button>
	    	<Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation={this.state.animation}>
                    <div style={{borderBottom:'1px solid #e9e9e9',paddingBottom:10,fontSize:16}}>{this.state.currentDayFormat}添加事件</div>
                    <div style={{paddingTop:15,fontSize:14}}>
	                    <Form layout="inline">
					        <FormItem label="事件" style={{width:'100%'}}>
					          <span>
					          	<Input style={{ width: '200px', marginRight: '10px' }} ref="addEvent" required/>
						        <Select style={{ width: '100px' }} ref="typeOfEvent" onSelect={this.selectValue.bind(this)}>
						          <Option value="warning">Warning</Option>
						          <Option value="normal">Normal</Option>
											<Option value="error">Error</Option>
						        </Select>
						      </span>
					        </FormItem>
					        <Button htmlType="submit" type="primary" className="rodal-confirm-btn" onClick={this.submitEvent.bind(this)}>Submit</Button>
                    <button className="rodal-cancel-btn" onClick={this.hide.bind(this)}>close</button>
				      	</Form>
      				</div>
                    
            </Rodal>
	      <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} onSelect={this.onSelect} style={{overflow:'hidden'}}/>
	      	
	      
      </div>
    );
  }
}

export default MyCalendar;