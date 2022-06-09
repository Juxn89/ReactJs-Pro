import React from 'react';
import { useFormik } from 'formik';

import '../styles/styles.css';

export const FormikBasicPage = () => {

  const {handleChange, values, handleSubmit} = useFormik({
    initialValues: {
      firstName: '',
      lastname: '',
      email: '',
    },
    onSubmit: (values) => {}
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstname">First name</label>
        <input type="text" name='firstname' onChange={ handleChange } value={ values.firstName }/>
        <span>First name is required</span>

        <label htmlFor="lastname">Last name</label>
        <input type="text" name='lastname'  onChange={ handleChange } value={ values.lastname }/>
        <span>Last name is required</span>

        <label htmlFor="email">Email address</label>
        <input type="email" name='email'  onChange={ handleChange } value={ values.email }/>
        <span>Email is required</span>
        <span>Email is not valid</span>

        <button type='submit'>Sumit</button>
      </form>
    </div>
  )
}
