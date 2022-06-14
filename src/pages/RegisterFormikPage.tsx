import { Form, Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

const initialData = {
    name: '',
    email: '',
    password: '',
    password2: ''
  }

export const RegisterFormikPage = () => {

  const validationsSchema = Yup.object({
    name: Yup.string().min(2, 'Name must be 3 characters or more.').max(15, 'Name must be 15 character or less.').required('Name is required.'),
    email: Yup.string().email('Invalid email address').required('Email is required.'),
    password: Yup.string().min(6, 'Password must have 6 characters or more').required('Password is required.'),
    password2: Yup.string().oneOf([Yup.ref('password')], 'Passwords aren\'t equal.').required('Password is required.')
  });

  return (
    <div>
    <h1>Register Formik Page - Dynamic Form</h1>
    <Formik initialValues={ {...initialData} } onSubmit= { (values) => console.log(values) } validationSchema= { validationsSchema }>
      { (formik) => (
        <Form>
          <MyTextInput label={'Name'} name={'name'} type="text"/>
          <MyTextInput label={'Email'} name={'email'} type="email"/>
          <MyTextInput label={'Password'} name={'password'} type="password"/>
          <MyTextInput label={'Password 2'} name={'password2'} type="password"/>

          <button type="submit">Create</button>
          {/* <button type="button" onClick={ resetForm }>Reset</button> */}
        </Form>
      ) }
    </Formik>
  </div>
  )
}
