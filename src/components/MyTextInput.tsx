import { useField } from 'formik';

interface Props {
  label: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  placeholder?: string,
  [x: string]: any
}

export const MyTextInput = ( { label, ...props }: Props ) => {
  const [ field, meta ] = useField(props);

  // console.log(field);
  // console.log(meta);

  return(
    <>
      <label htmlFor={ props.id || props.name }> { label } </label>
      <input type="text" className='text-input' {...field} {...props}/>
      { meta.touched && meta.error && <span className='error'>{ meta.error }</span> }
    </>
  );
}