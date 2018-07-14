import React, {Component} from 'react';
import  Login  from './Login';
    

class MainL extends Component{
	constructor(props){
        super(props)
        this.state = {
            display: false,
            name:"",
            email: "",
            phone:""

          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
    }
    
    validateForm() {

     
        return this.state.email.length > 0 && ( this.state.name.length > 0 || this.state.phone.length > 0   );
      }


    handleChange = event => {
        this.setState({
          display: !this.state.display,
          [event.target.id]: event.target.value
        });
        
      }

      handleSubmit = event => {
        event.preventDefault();
        
        const guest = {
            email:this.state.email,
            name: this.state.name,
            phone: this.state.phone
        }

        console.log(guest);

        axios
        .post('api/contactUs', guest)
        .then(res => console.log(res.data))
        .catch(err => this.setState({errors: err.response.data}));
    }

    render() {
    return(
//          <div className="">
// <header className="bg_col-00844e col-eefffd h-75px w-auto jc-sb  flex box-shadow">
//         <div className="flex al_it-c ml-10 font-weight-700 text-shadow">
//             CodeBase
//         </div>
//         <div className="flex jc-sa w-20 fl-dir-row al_it-c mr-10">
            
//             <div className="flex jc-sa  w-60 ">
//                 <img className="filter h-25px  w-25px   " src="/images/call.png" alt=""/> свяжитесь с нами
//             </div>

//         </div>
//     </header>
// <Login/>
// </div>
<div>
<div className="blackscreen" style={this.state.display ? {display:''} : {display:'none'}}></div>
<header className="bg_col-658a92 col-eefffd h-75px w-auto jc-sb  flex box-shadow">
<div className="flex al_it-c ml-10 font-weight-700 text-shadow">
    C{('{}')}deBase

</div>
<div className="flex jc-sa w-20 fl-dir-row al_it-c mr-10">

    <div onClick={this.handleChange} className="flex jc-sa  w-60 pointer ">
        <img className="filter h-25px  w-25px   " src="./images/call.png" alt=""/> свяжитесь с нами
    </div>

</div>
</header>


<div className=" contact-us" style={this.state.display ? {display:''} : {display:'none'}} >

<h3>Contact Us</h3>
<span  onClick={this.handleChange} className="close-contact-us">&times;</span>
  <form onSubmit={this.handleSubmit} action="/action_page.php">
  
    <input  onChange={(e) => this.setState({ name: e.target.value})} value={this.state.name} type="name" id="name" name="name" placeholder="Name"/>
<br/>
 
    <input   onChange={(e) => this.setState({ email: e.target.value})}  value={this.state.email} type="email" id="email" name="email" placeholder="Email"/>
<br/>
   

    <input  onChange={(e) => this.setState({ phone: e.target.value})} value={this.state.phone} type="tel" id="phone" name="phone" placeholder="Phone" />

   

    <input disabled={!this.validateForm()}  type="submit" value="Submit"/>
  </form>
</div>


<Login/>
</div>
    );
    }
}

export default MainL