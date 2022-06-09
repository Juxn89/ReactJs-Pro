import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must have 15 characters or less').required('Required'),
      lastName: Yup.string().max(10, 'Must have 10 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    })
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={ handleSubmit }>
        <label htmlFor="firstname">First name</label>
        <input type="text" { ...getFieldProps('firstName') } />
        { touched.firstName && errors.firstName && <span> { errors.firstName } </span>}

        <label htmlFor="lastname">Last name</label>
        <input type="text" { ...getFieldProps('lastName') } />
        { touched.lastName && errors.lastName && <span> { errors.lastName } </span>}

        <label htmlFor="email">Email address</label>
        <input type="email" { ...getFieldProps('email') } />
        { touched.email && errors.email && <span> { errors.email } </span>}

        <button type='submit'>Sumit</button>
      </form>
    </div>
  )
}
