import React, {Component} from 'react';
import Group  from './Group';

class ListofGroups extends Component{
	constructor(props){
        super(props);
        this.state = {isToggleOn: false};
        this.state = {isToggleOn2: false};
        this.state = {isToggleOn3: false};
        this.handleClick = this.handleClick.bind(this);
        
    
        }
	
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
    }

    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }
   ));
      }
      handleClick2() {
        this.setState(prevState => ({
          isToggleOn2: !prevState.isToggleOn2
        }
   ));
      }

    render() {
       
      
    return(
        <section className=" ml-20 mr-20 mt-2">
     


<Group/>

      </section>
 
    )
    }
}

export default ListofGroups
