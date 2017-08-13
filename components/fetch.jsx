import React from 'react';
import ReactDOM from 'react-dom';
import { Timeline, Icon ,Card } from 'antd';

class MyFetch extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            lists: []
        }
		
	}

	fetchFn = () => {
        fetch('../data.json')
            .then((res) => { console.log(res.status);return res.json() })
            .then((data) => { this.setState({lists:data.listData}); console.log(this.state.lists) })
            .catch((e) => { console.log(e.message) })
    }

    componentDidMount() {
        this.fetchFn()
    }
  
  
  render() {
    return (
	    
	      
		  <Card title="Fetch存取数据"  style={{ width: 700 ,float:'left', margin:'0 auto'}} className="animated zoomIn">
		      {
                    this.state.lists.map((item,i) => {
                        return (
                            <p className="doclist" key={i}><a href={ item.url } target="_blank">{ item.title }</a></p>
                        )
                    })
                }
		   </Card>
		   
		    
		
    );
  }
}

export default MyFetch;