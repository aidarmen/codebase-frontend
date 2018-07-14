import React, {Component} from 'react';
import Checkbox from './Checkbox';
import StudentAtendance from './StudentAtendance';
import UpperTab from './UpperTab';

class Table extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(


        

        <div>
<StudentAtendance list ={ this.props.list}  />
  {/* // <StudentAtendance name={"Dmitry"} paid={0} />
  // <StudentAtendance name={"Sergey"} paid={1} />
  // <StudentAtendance name={"Nikolai"} paid={0} /> */}
    </div>
      
       

       
        )


        }


    }


export default Table