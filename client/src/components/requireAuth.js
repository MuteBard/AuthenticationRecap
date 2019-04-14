import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'


export default (ChildComponent) => {
    class ComposedComponent extends Component {
        shouldNavigateAway(){
            if(!this.props.auth){
                //allows us to progrmattically navigate around our application using a method called .push()
                //we put the route in here that we attempt to navigate to, so in this case, we put our root route
                this.props.history.push('/')
            }
        } 
        componentDidMount(){
            this.shouldNavigateAway()    
        }
        componentDidUpdate(){
            this.shouldNavigateAway()    
        }
        render(){
            //take all props taken from the parent and pas them STRAIGHT DOWN
            return <ChildComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return { auth : state.auth.authenticated };
    }

    return connect(mapStateToProps)(ComposedComponent); 
}