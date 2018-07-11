import React, {Component} from 'react';

    

class UpperTab extends Component{
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
        <th className="bg_col-4a4a48 bor-rad-10-l ">
            <div className="border-r-col-c8c3bd">
                <div className="h-full flex  jc-sb">
                    <div className="ml-10 flex al_it-c font-weight-50 ">Students</div>
                    <span className="mr-10 font-size-30">+</span>
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
    
    );
    }
}

export default UpperTab