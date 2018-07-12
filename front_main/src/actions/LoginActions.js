import axios from 'axios'

export function addCourse() {
    return function(dispatch) {
        axios.post('/api/request/add/course', {
            photo: '',
            course_name: ''
        }).then((response) => {
            cb(false)
        }).catch((err) => {
            cb(true)
        })
    }
}