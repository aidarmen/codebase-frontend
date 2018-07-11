import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../constants/Auth'

// import { newNotificationActions } from './NotificationActions'
import axios from 'axios'

import createHistory from 'history/createBrowserHistory'
const history = createHistory({forceRefresh:true})

export function signIn(email, password) {
	return function (dispatch) {
		axios.post('/api/auth/signin', {
			email: email.toLowerCase(),
			password: password
		}).then((response) => {
				const localData = {
					id: response.data.data.user._id,
					email: response.data.data.user.email,
					role: response.data.data.user.role
				}


				localStorage.setItem('token', response.data.data.token)

				history.push('/inner/v')
				
		}).catch((err) => {
				// newNotificationActions(dispatch, 'auth_bad_credentials')
			}
		)
	}
}

export function signUp(email, password, companyName) {
	return function (dispatch) {
		axios.post('/api/auth/signup', {
			companyName: companyName,
			email: email.toLowerCase(),
			password: password
		}).then((response) => {
				const localData = {
					id: response.data.data.user._id,
					email: response.data.data.user.email,
					role: response.data.data.user.role
				}

				localStorage.setItem('token', response.data.data.token)

				history.push('/inner/v')
				
		}).catch((err) => {
				// newNotificationActions(dispatch, 'auth_already_registered')
			}
		)
	}
}

export function logout() {
	return function(dispatch){
		localStorage.removeItem('token')

		history.push('/auth/signin')
	}
}


export function me() {
	return function (dispatch) {
		axios.get('/api/auth/me')
		.then((response) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data
			})
		}).catch((err) => {
				history.push('/auth/signin')
			}
		)
	}
}
