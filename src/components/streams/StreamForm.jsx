import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {



    renderInput = ({ label, input, meta }) => {
        const displayRedErrBackground = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={displayRedErrBackground}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className='ui error message'>
                    <div className="header">
                        {error}
                    </div>
                </div>
            )

        }

    }

    onSubmit = (formValues) => {
        //Action Creator of create Stream
        this.props.onSubmit(formValues);

    }

    render() {
        //console.log(this.props);
        return (
            <div className="StreamCreate ui container">
                <h1>{this.props.title}</h1>
                <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name='title' component={this.renderInput} label='Enter Title' />
                    <Field name='description' component={this.renderInput} label='Enter Description' />
                    <button className='ui button primary'>Submit</button>

                </form>
            </div>
        );
    }

}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter a title';
    }

    if (!formValues.description) {
        errors.description = 'Please enter a description'
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);


export default (formWrapped);