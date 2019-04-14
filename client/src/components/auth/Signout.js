import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {

    //The moment this pages loads, initiate the process of signing out
    componentDidMount(){
        this.props.signout()
    }

    render() {
        return <div>Sorry to see you go</div>
    }
}
export default connect(null, actions)(Signout)