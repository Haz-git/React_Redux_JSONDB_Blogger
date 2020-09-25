
//This component should be linked to CreateBlog, user submission values should be transferred to CreateBlog and generate a blog.

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../history';

//CSS
import '../css/formBlog.css';


//Have to manually hoist this to prevent re-rendering on first change.
const renderInput = ({ input, label }) => {
    return (
        <div>
            <label>{label}</label>
            <input {...input}></input>
        </div>
    )
}

const FormBlog = ({ handleSubmit, onSubmit }) => {

    //To make sure this renderInput correctly submits its values to the provided handleSubmit passed to onSubmit, your must pass '{...field.input}' because the field object is passed to whatever component is defined in Field, and the input property contains all the onChange handlers/magic required to send your stuff.

    const handleOnSubmit = (formValues) => {
        console.log(formValues);
        onSubmit(formValues);
    }

    const handleGoBack = () => {
        history.push('/');
    }

    return (
        <div className='form-main-container'>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <div className='title-container'>
                    <label>Please Enter a New Title</label>
                    <Field name='title' component={renderInput}></Field>
                </div>
                <div className='desc-container'>
                    <label>Please Enter a New Description</label>
                    <Field name='description' component={renderInput}></Field>
                </div>
                <div className='button-container'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='reset' className='btn btn-danger'>Reset</button>
                    <button onClick={() => handleGoBack}className='btn btn-success'>Go Back</button>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'blog_form'
})(FormBlog);