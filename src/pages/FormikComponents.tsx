import React from 'react';
import * as Yup from 'yup';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik initialValues={ {
          firstName: '',
          lastName: '',
          email: '',
          termns: false,
          jobType: ''
        } }
        onSubmit={ (values) => console.log(values) }
        validationSchema= {
          Yup.object({
            firstName: Yup.string().max(15, 'Must have 15 characters or less').required('Required'),
            lastName: Yup.string().max(10, 'Must have 10 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions.'),
            jobType: Yup.string().required('Required').notOneOf(['it-junior'], 'This option is not allowed.')
        }) }>

          {
            (formik) => (
              <Form noValidate>
                <label htmlFor="firstName">First name</label>
                <Field name="firstName" type="text"/>
                <ErrorMessage name="firstName" component="span"/>

                <label htmlFor="lastName">Last name</label>
                <Field name="lastName" type="text"/>
                <ErrorMessage name="lastName" component="span"/>

                <label htmlFor="email">Email address</label>
                <Field name="email" type="email"/>
                <ErrorMessage name="email" component="span"/>

                <label htmlFor='jobType'>Job Type</label>
                <Field name="jobType" as="select">
                  <option value="">Pick something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-junior">IT Junior</option>
                </Field>
                <ErrorMessage name='jobType' component="span"/>

                <label>
                  <Field name="terms" type="checkbox"/>
                  Terms of conditions
                </label>
                <ErrorMessage name="terms" component="span"/>

                <button type='submit'>Sumit</button>
              </Form>
            )

          }
      </Formik>
    </div>
  )
}
