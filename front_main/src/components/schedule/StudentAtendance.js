import React, {Component} from 'react';
import Checkbox from './Checkbox';
    

class StudentAtendance extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(
         
        this.props.list.map(function (name){
            return ( 

<tr className="h-56px ">
            <td className="border-r-col-c8c3bd">
    
                <span className="al_it-c flex ml-10 ">
                    <img className="avatar mr-5" src="./images/avatar.png" alt=""/> {name[0]}
                </span>
            </td>
            
            <td style={name[1]==1 ? {color: 'green'} : { color: 'red'}} className="border-r-col-c8c3bd  col-9fc9b3 text_al-c ">  { name[1]==1 ? 'paid' : 'didn`t pay' } </td>

            
            <td>
    
               <Checkbox />
            </td>
            <td>
            <Checkbox />
            </td>
            <td>
            <Checkbox/>
            </td>
            <td>
            <Checkbox/>
            </td>
            <td>
            <Checkbox/>
            </td>
            <td>
            <Checkbox/>
            </td>
            <td>
            <Checkbox/>
            </td>
            </tr>
        )
        }) 

    );
    }
}

export default StudentAtendance