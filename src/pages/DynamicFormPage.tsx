import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJSON from '../data/custom-form.json';

const initialValue:{[key: string]: any} = { };
for(const input of formJSON){
  initialValue[input.name] = input.value
}

export const DynamicFormPage = () => {
  return (
    <div>
      <div>DynamicFormPage</div>
      <Formik initialValues={ initialValue } onSubmit={ (values) => { console.log(values) } }>
        { (formik) => (
          <Form noValidate>
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
