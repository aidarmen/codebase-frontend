import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            email: "",
            password: ""
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
    }
    
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
      }
    
      handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
        
      }
    
      handleSubmit = event => {
        event.preventDefault();

console.log(this.props.value)
      
      }
    
    render() {
        return (
            <section className=" grid grid-col-a-80-a grid-row-70-a ">




        <div className="grid grid-item4 grid-col-a-15-a ">


            <div className="login-page grid-item1">
                <div className="form">
                    <div className="jc-c flex h-50px font-size-30 col-ffffff mb-10">Login</div>

                    <form onSubmit={this.handleSubmit} className="">
                        <input  type="email"  value={this.state.email} onChange={(e) => this.setState({...this.state, email: e.target.value})} placeholder="email" />
                        <input   value={this.state.password}  onChange={(e) => this.setState({...this.state, password: e.target.value})}  type="password" placeholder="password" />
                        <button disabled={!this.validateForm()} type="submit" className="loginbutton" >sign in</button>

                    </form>
                    <div className="flex fl-dir-row jc-c    ">
                        <div className="m-auto bg_col-white w-30 h-1px" ></div>
                        <div className="font-size-11 col-white" >don't have an account?</div>
                        <div className="m-auto bg_col-white w-30 h-1px"     ></div>
                    </div>

                    <button   className="registerbutton">register</button>

                    <div className="license">by rergistering you are acepting the terms of license agreement</div>

                </div>
            </div>


            <div className="grid-img1 ">
                <img className=" h-full w-full" src="./images/desk.png" alt=""/>

            </div>


        </div>
        <hr className="grid-hr w-full h-1px bg_col-white" />



        <div className="grid-item2  grid-col-a-5-a-5-a grid-row-a grid mt-2 ">
            <div className="grid-ad1 flex fl-dir-row w-full  h-100px jc-c">
                <div className="flex fl-dir-col jc-c">
                    <img className="h-80px w-80px  border-radius-full" src="./images/AD1.png" alt="" />
                </div>
                <div className="flex fl-dir-col p-10 jc-c col-white">
                    <div className="font-size-19 p-10 font-weight-700">Register</div>
                    <div className="font-size-16 p-10 font-weight-100">Results will show your potential</div>
                </div>


            </div>
            <div className="grid-ad2 flex fl-dir-row w-full  h-100px jc-c">
                <div className="flex fl-dir-col jc-c">
                    <img className="h-80px w-80px  border-radius-full" src="./images/AD1.png" alt="" />
                </div>
                <div className="flex fl-dir-col p-10 jc-c col-white">
                    <div className="font-size-19 p-10 font-weight-700">Study</div>
                    <div className="font-size-16 p-10 font-weight-100">Never give up</div>
                </div>


            </div>
            <div className="grid-ad3 flex fl-dir-row w-full  h-100px jc-c">
                <div className="flex fl-dir-col jc-c">
                    <img className="h-80px w-80px  border-radius-full" src="./images/AD1.png" alt="" />
                </div>
                <div className="flex fl-dir-col p-10 jc-c col-white">
                    <div className="font-size-19 p-10 font-weight-700">Recieve Results</div>
                    <div className="font-size-16 p-10 font-weight-100">30 minuts to study</div>
                </div>


            </div>

        </div>



    </section>
        )
    }
}

export default Login