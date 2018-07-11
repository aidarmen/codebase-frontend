import React, {Component} from 'react';

class Login extends Component{

    constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
        return (
            <section>
      <div>
            <div className="login-page">
                    <div className="form">
                    <div className="jc-c flex h-50px font-size-30 col-ffffff mb-10">Login</div>
                        
                      <form className="login-form">
                        <input type="text" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <button >sign in</button>
                        <div className="flex fl-dir-row al_it-c">

                         
                       </div>
                      </form>
                    </div>
                  </div>

      </div>
      <div>

      </div>
  </section>
        )
    }
}

export default Login