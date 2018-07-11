import React, {Component} from 'react';
import Checkbox from './Checkbox';
import SearchTab from './SearchTab';    

import StudentAtendance from './StudentAtendance';
class addStudents extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(
         
        <table className="collapse w-full  ">
       <SearchTab/>
       <tr style={{height:'10px'}}> </tr>
 {this.props.list.map(function (name){
            return ( 
        <tr className=" pt-20px" >
            <td style={{height:'70px'}} className="w-10">
    
                <span  className="al_it-c flex ml-40 flex jc-c vert-al-c ">
                    <img className="avatar" src="./images/avatar.png" alt=""/> 
                </span>
            </td>
            
            <td style={{height:'70px'}}  className="  text_al-l  "><div className="flex jc-sb">
            <span style={{fontSize:'23px', verticalAlign:'center'}}  className="ml-5  "> {name[0]}
            </span> 
            <div style={{padding:'5px'}}>
            <span style={{boxSizing:'border-box' }} className="bg_col-f0572d w-36px h-36px flex jc-c   font-size-30 border-radius-10 ">+</span> 
          
           </div>
            </div>  
            <hr style={{backgroundColor:'#e7e2dc', height:'1px', width: '85%', display:'flex', 
        margin: '0 auto'}}/>
            </td>

            
            
            </tr>

)
}) }
         


      </table>

    );
    }
}

export default addStudents