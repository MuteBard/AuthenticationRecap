import React, { Component } from "react"
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux';
import * as actions from '../../actions'

class Signup extends Component {

    onSubmit = (formProps) => {
        this.props.signup(formProps)
    }
 
    render (){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"/>  
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                        />
                </fieldset>
                <button>Sign up</button>
            </form>

        )
    }
}

//#1 now we can make use of the field tag
const options = { form : 'signup'}

export default compose(
    connect(null, actions),
    reduxForm(options) 
)(Signup)




