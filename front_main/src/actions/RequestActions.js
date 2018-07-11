import axios from 'axios'

export function requestAdvice(name, phone, email, cb) {
	return function (dispatch) {
		axios.post('/api/request/advise', {
			name,
			phone,
			email
		}).then((response) => {
			cb(false)	
		}).catch((err) => {
			cb(true)
		})
	}
}


export function requestCourse(name, phone, email, course, cb) {
	return function (dispatch) {
		axios.post('/api/request/course', {
			name,
			phone,
			email,
			course
		}).then((response) => {
			cb(false)	
		}).catch((err) => {
			cb(true)
		})
	}
}