import React, { Component } from 'react';
import store from '../store/index'
import RequestCreators from "../store/requestCreators";

class ParkInfo extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(()=>this.storeChange())
    }

    storeChange(){
        this.setState(store.getState())
    }

    componentDidMount(){
        const action  = RequestCreators.PARK_INFO_GET_INFO_REQUEST()
        store.dispatch(action);
    }


    render() { 
        return ( 
        <div>
            costIndex:{this.state.parkInfo.costIndex}
            securityIndex:{this.state.parkInfo.securityIndex}
            efficiencyIndex:{this.state.parkInfo.efficiencyIndex}
            profitIndex:{this.state.parkInfo.profitIndex}
        </div> 
        );
    }
}
 
export default ParkInfo;