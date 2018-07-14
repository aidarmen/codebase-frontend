import React, {Component} from 'react';
import ListofStudents  from './ListofStudents';

class Schedule extends Component{
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
     

    render() {
       
      
    return(
        <section className=" ml-20 mr-20 mt-2">
      <div className="flex jc-sb w-full pt-35px pb-20px">
          <div onClick={this.handleClick} style={this.state.isToggleOn ? {height:'160px', backgroundColor:'#fcf9f0 '} : {height:'145px', opacity:'0.7'}}   className="text-transform-uppercase bg_col-white font-size-30 font-weight-800 col-5d5c57 bor-rad-10 flex w-30  mr-12px jc-c al_it-c">
              Elementary

          </div>
          <div onClick={() => {this.setState(prevState => ({  isToggleOn2: !prevState.isToggleOn2}));}} style={this.state.isToggleOn2 ? {height:'160px', opacity:'1'} : {height:'145px',  opacity:'0.7'}}  className=" bg_col-white text-transform-uppercase font-weight-800 font-size-30 col-5d5c57 bor-rad-10 flex w-30 h-145px  m-x-12 jc-c al_it-c  ">
              pre-intermediate

          </div>
          <div  onClick={() => {this.setState(prevState => ({  isToggleOn3: !prevState.isToggleOn3}));}} style={this.state.isToggleOn3 ? {height:'160px', opacity:'1'} : {height:'145px',  opacity:'0.7'}}  className=" bg_col-white text-transform-uppercase font-weight-800 font-size-30 col-5d5c57 bor-rad-10 flex w-30 h-145px ml-12px  jc-c al_it-c">
              intermediate

          </div>
      </div>

<ListofStudents list ={[ ['Maximilian John', '1'], [ 'Michael Someone',  '0'],['Max Dostoev', '1'], [ 'Michel Huogo',  '0']]} display={this.state.isToggleOn ? false : true } />

<ListofStudents list ={[ [' John Simon', '0'], [ ' Someone Terrible',  '0'],['Great Me', '1'], [ 'Michel Huogo',  '1'], [ ' Someone Terrible',  '0'],[ ' Someone Terrible',  '0']]} display={this.state.isToggleOn2 ? false : true } />

<ListofStudents list={[]} display={this.state.isToggleOn3 ? false : true } />


      </section>
 
    )
    }
}

export default Schedule