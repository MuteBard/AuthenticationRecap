import React, { Component } from "react"
import { reduxForm, Field } from 'redux-form'

class Signup extends Component {

    onSubmit = (formProps) => {
        console.log(formProps)

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
export default reduxForm(options)(Signup);
