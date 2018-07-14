import React, {Component} from 'react';
import ListofStudents  from './ListofStudents';

class Group extends Component{
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
 <div className="flex jc-sb w-full pt-35px pb-20px">
       { this.props.list.map(function (data){
            return ( 
     
          
          <div onClick={() => {this.setState(prevState => ({  isToggleOn2: !prevState.isToggleOn2}));}} style={this.state.isToggleOn2 ? {height:'160px', backgroundColor:'#fcf9f0 '} : {height:'145px', backgroundColor:'#bfeeda'}}  className="text-transform-uppercase font-weight-800 font-size-30 col-5d5c57 bor-rad-10 flex w-30 h-145px  m-x-12 jc-c al_it-c  ">
              {data.group}

          </div>
          
      )} ) }
</div>
      </section>
 
    )
    }
}

export default Group