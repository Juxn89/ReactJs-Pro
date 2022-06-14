import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
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
            { formJSON.map( ( { type, label, placeholder, name, options } ) => {
              if(type === 'input' || type === 'password' || type === 'email')
                return <MyTextInput key={ name } type={ (type as any) } label={label} name={name} placeholder={placeholder}/>

              if (type === 'select')
                return (
                  <MySelect key={ name } label={label} name={name} placeholder={placeholder}>
                    <option value="">Select an option</option>
                    {
                      options?.map( ({id, label}) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </MySelect>
                )


              throw new Error(`Type: ${type} is not soported`);
             }) }
            <button type='submit'>Submit</button>
          </Form>
        ) }
      </Formik>
    </div>
  )
}
