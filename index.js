import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Login from './Login';
import Welcome from './Welcome';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render(
<Router history={browserHistory}>
<Route path="/" component={App}/>
<Route path="/login" component={Login}/>
<Route path="/header" component={Header}/>
<Route path="/content" component={Content}/>
<Route path="/footer" component={Footer}/>
<Route path="/welcome" component={Welcome}/>

</Router>,document.getElementById('root')

);

