import { values } from 'lodash';
//This component should be linked to CreateBlog, user submission values should be transferred to CreateBlog and generate a blog.

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FormBlog = ({ handleSubmit, onSubmit }) => {

    //To make sure this renderInput correctly submits its values to the provided handleSubmit passed to onSubmit, your must pass '{...field.input}' because the field object is passed to whatever component is defined in Field, and the input property contains all the onChange handlers/magic required to send your stuff.
    const renderInput = ({ input, label }) => {
        return (
            <div>
                <label>{label}</label>
                <input {...input}></input>
            </div>
        )
    }

    const handleOnSubmit = (formValues) => {
        onSubmit(formValues);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <Field name='title' component={renderInput} label='Enter Title'  ></Field>
                <Field name='description' component={renderInput} label='Write a Description'></Field>
                <button type='submit' className='btn btn-primary'>Submit</button>
                <button type='reset' className='btn btn-danger'>Reset</button>
            </form>
        </div>
    )
}

export default reduxForm({
    form: 'blog_form'
})(FormBlog);