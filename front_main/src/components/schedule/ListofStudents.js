import React, {Component} from 'react';
import UpperTab from './UpperTab';
import Table from './Table'
import AddStudents  from './AddStudents'
import StudentAtendance from './StudentAtendance';

class ListofStudents extends Component{
	constructor(props){
        super(props)
        this.state = {
            isToggleOn: false,
            display: this.props.display  };
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
        <div>
        <table style={this.props.display ? {display:'none'} : {display: '' } } className="collapse w-full fadeInUp ">
       
        <tr className="col-ffffff h-56px row-1 ">
        <th className="bg_col-4a4a48 bor-rad-10-l ">
            <div className="border-r-col-c8c3bd">
                <div className="h-full flex  jc-sb">
                    <div className="ml-10 flex al_it-c font-weight-50 ">Students</div>
                    <span onClick={() => {this.setState(prevState => ({  isToggleOn: !prevState.isToggleOn}));}}  className="mr-10 font-size-30">+</span>
                </div>
            </div>
        </th>
        <th className="bg_col-4a4a48 w-14 font-weight-50">
            Status
        </th>
        <th className="w-8 bg_col-4a4a48  ">
            <div className="border-r-col-c8c3bd border-l-col-c8c3bd">
                <div className="font-size-12 font-weight-700">04.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bg_col-4a4a48">
            <div className="border-r-col-c8c3bd">
                <div className="font-size-12 font-weight-700">06.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bg_col-4a4a48">
            <div className="border-r-col-c8c3bd">
                <div className="font-size-12 font-weight-700">08.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bg_col-4a4a48">
            <div className="border-r-col-c8c3bd">
                <div className="font-size-12 font-weight-700">10.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bg_col-4a4a48">
            <div className="border-r-col-c8c3bd">
                <div className="font-size-12 font-weight-700">12.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bg_col-4a4a48">
            <div className="border-r-col-c8c3bd">
                <div className="font-size-12 font-weight-700">14.07.2018</div>
                <hr className="small-v-l "/>
                <div className="font-size-11 font-weight-200">18:00-19:00</div>
            </div>
        </th>
        <th className="w-8 bor-rad-10-r bg_col-4a4a48">

            <div className="font-size-12 font-weight-700">16.07.2018</div>
            <hr className="small-v-l "/>
            <div className="font-size-11 font-weight-200">18:00-19:00</div>

        </th>
    </tr>
        {/* <UpperTab /> */}
        <tr style={{height:'10px'}}> </tr>
       {/* <Table  list={this.props.list}  display={this.props.display}/> */}
       <StudentAtendance list ={ this.props.list}  />
         
       </table>
       <AddStudents list ={this.props.list}  display={this.state.isToggleOn ? '1' : '0' } />  
       </div>
    )
    }
}

export default ListofStudents