import React from 'react';
import ReactDOM from 'react-dom';
import Login from './component/Login';
import WebApp from './component/WebApp'
import {createStore} from 'redux';
import myApp from './service/Reducer';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

let store = createStore(myApp);

const routing = (
    <Router>
        <div style={{height:"100%"}} >
            <Redirect exact from={process.env.PUBLIC_URL + '/'} to={process.env.PUBLIC_URL + '/login'}></Redirect>
            <Route exact path={process.env.PUBLIC_URL + '/login'} render={(props) => <Login store={store}/>} />
            <Route exact path={process.env.PUBLIC_URL + '/webApp'} render={(props) => <WebApp store={store}/>}  /> 
        </div>
    </Router>
)
function render(){
    ReactDOM.render(routing, document.getElementById('root'));
}

store.subscribe(render);

render();