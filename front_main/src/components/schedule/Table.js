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


        <table style={this.props.display=='0' ? {display:'none'} : {display: '' } } className="collapse w-full fadeInUp ">
        <UpperTab/>
<tr style={{height:'10px'}}> </tr>
        
<StudentAtendance list ={ this.props.list}  />
  {/* // <StudentAtendance name={"Dmitry"} paid={0} />
  // <StudentAtendance name={"Sergey"} paid={1} />
  // <StudentAtendance name={"Nikolai"} paid={0} /> */}
    
      </table>
       

       
        )


        }


    }


export default Table