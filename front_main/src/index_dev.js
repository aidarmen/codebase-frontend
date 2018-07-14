import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route , Redirect} from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import '../../assets/styles/index.css'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'

import MainL   from './components/login/MainL'
import MainSchedule   from './components/schedule/MainSchedule'
import store from './store.js';



import axios from 'axios'
// axios.defaults.baseURL =  'http://192.168.1.105:8000/'
// axios.defaults.baseURL =  'http://localhost:8000/'
// axios.defaults.baseURL =  'https://api.ilovepeople.pro/'
//import Inner from './containers/Login/Main_login'

render(
 <Provider store={store}>
  <ConnectedRouter history={history}>
   <Switch>
    <Route path='/login' component={MainL}/>   
	<Route path='/schedule' component={MainSchedule}/>   
    
   </Switch>
  </ConnectedRouter>
 </Provider>,
 document.getElementById('root')
)
