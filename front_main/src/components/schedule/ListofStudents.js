import React, {Component} from 'react';

import Table from './Table'
import AddStudents  from './AddStudents'


class ListofStudents extends Component{
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
       <Table  list={this.props.list}  display={this.props.display}/>
       <AddStudents list ={this.props.list}/> 
       </div>
    )
    }
}

export default ListofStudents