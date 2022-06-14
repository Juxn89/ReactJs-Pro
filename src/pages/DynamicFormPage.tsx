import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

const initialValue = {
  name: ''
}

export const DynamicFormPage = () => {
  return (
    <div>
      <div>DynamicFormPage</div>
      <Formik initialValues={ {...initialValue} } onSubmit={ (values) => { console.log(values) } }>
        { (formik) => (
          <Form>
            { formJSON.map( ( { type, label, placeholder, name } ) => {
              return <MyTextInput key={ name } type={ (type as any) } label={label} name={name} placeholder={placeholder}/>
             }) }
            <button type='submit'>Submit</button>
          </Form>
        ) }
      </Formik>
    </div>
  )
}
