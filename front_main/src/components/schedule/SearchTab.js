import React, {Component} from 'react';

    

class SearchTab extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){
		// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
		// this.props.authActions.me()
	}
    render() {
    return(
        <tr className="col-ffffff h-56px row-1 ">
        <th className="bg_col-4a4a48   bor-rad-10" colSpan={2}>
            
                <div className="h-full flex  jc-sb">
                    <div className="ml-5 flex al_it-c font-weight-50 ">
                     <div class="search">
                                <div class="field-input">
                                
                                    <input type="text" placeholder="Search..."/> <span class="fa fa-search"></span>
                                </div>
                                </div>
                    </div>
                    <span style={{fontSize:'40px'}} className="mr-5 ">&times;</span>
                </div>
            
        </th>
        
        
            
        
       
    </tr>
    
    );
    }
}

export default SearchTab