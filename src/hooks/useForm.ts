import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initialData: T) => {
  const [formData, setFormData] = useState( initialData );

  const handleOnChange = (event:ChangeEvent<HTMLInputElement>) => {         
    const { target:{name} } = event;
    setFormData({
        ...formData,
        [name]: event.target.value 
    });
 }
 
  return {
    formData,
    handleOnChange
  }
}
