import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route , Redirect} from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'
import '../../assets/styles/index.css'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import configureStore from './store/configureStore'
const store = configureStore(true)


import axios from 'axios'
// axios.defaults.baseURL =  'http://192.168.1.105:8000/'
// axios.defaults.baseURL =  'http://localhost:8000/'
// axios.defaults.baseURL =  'https://api.ilovepeople.pro/'

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				{/* <Route path='/inner' component={Inner}/>
				<Route exact path='/' component={Main_page}/>
				<Route path='/*' render={() => (
					<Redirect to='/inner/courses'/>
				)}/> */}	
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
)
