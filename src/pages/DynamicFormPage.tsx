import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';

import formJSON from '../data/custom-form.json';

const initialValue: {[key: string]: any} = { };
const requiredFields: {[key:string]: any} = { };

for(const input of formJSON){
  initialValue[input.name] = input.value;

  if(!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if(rule.type === 'required') {
      schema = schema.required(`${input.label} is required`)
    }

    if(rule.type === 'minLenght') {
      schema = schema.min( (rule as any).value || 2, `The minimun characters is ${(rule as any).value || 2}`);
    }

    if(rule.type === 'email') {
      schema = schema.email('Invalid email format')
    }
  }

  requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object( {...requiredFields} );

export const DynamicFormPage = () => {
  return (
    <div>
      <div>DynamicFormPage</div>
      <Formik initialValues={ initialValue } onSubmit={ (values) => { console.log(values) } } validationSchema={ validationsSchema }>
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
