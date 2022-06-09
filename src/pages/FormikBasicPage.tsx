import React from 'react';
import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormsValues {
  firstName: string,
  lastName: string,
  email: string
}

export const FormikBasicPage = () => {

  const validate = ({firstName, lastName, email}: FormsValues) => {
    const errors: FormikErrors<FormsValues> = {};

    if(!firstName) errors.firstName = 'Required';
    if(firstName.length >= 15) errors.firstName = 'Must be 15 characters or less';

    if(!lastName) errors.lastName = 'Required';
    if(lastName.length >= 10) errors.lastName = 'Must be 10 characters or less';

    if (!email) errors.email = 'Required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Invalid email address';

    return errors;
  }

  const {handleChange, values, handleSubmit} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {},
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstname">First name</label>
        <input type="text" name='firstname' onChange={ handleChange } value={ values.firstName }/>
        <span>First name is required</span>

        <label htmlFor="lastname">Last name</label>
        <input type="text" name='lastname'  onChange={ handleChange } value={ values.lastName }/>
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
