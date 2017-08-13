'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';
import SiderDemo from './components/sider.jsx';
import './components/style.css';

import MyTable from './components/table.jsx';
import MyCalendar from './components/calendar.jsx';
import PersonalInformation from './components/timeline.jsx';
import MyCharts from './components/charts.jsx';
import MyFetch from './components/fetch.jsx';


ReactDOM.render(
    <Router history={hashHistory} >
        <Route path="/" component={SiderDemo}>
        	<IndexRoute  component={PersonalInformation} />
            <Route path="myPersonal" component={PersonalInformation} />
            <Route path="myCalendar" component={MyCalendar} />
            <Route path="myCharts" component={MyCharts} />
            <Route path="myFetch" component={MyFetch} />
            
        </Route>
    </Router>, 
    document.getElementById('app')
 );