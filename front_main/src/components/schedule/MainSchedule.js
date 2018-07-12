import React, {Component} from 'react';
import  Schedule  from './Schedule';
import ListofStudents  from './ListofStudents';
    

class MainSchedule extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(
         <div className="">
          <header className="bg_col-658a92  col-eefffd h-75px w-auto jc-sb  flex box-shadow">
            <div className="flex al_it-c ml-10 font-weight-700 text-shadow">
            CodeBase
             </div>
        <div className="flex jc-sa w-20 fl-dir-row al_it-c mr-10">
            
            <div className="flex jc-sa  w-60 ">
                <img className="filter h-25px  w-25px   " src="/images/call.png" alt=""/> свяжитесь с нами
            </div>

        </div>
    </header>
    
<Schedule/>


</div>
    );
    }
}

export default MainSchedule