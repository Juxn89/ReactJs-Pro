import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import '../styles/styles.css';

const initialData = { 
    name: '',
    email: '',
    password: '',
    password2: ''
  }

export const RegisterPage = () => {
    const { formData, handleOnChange } = useForm(initialData);

     const { name, email, password, password2 } = formData;

     const handleOnSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
     }

    return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ handleOnSubmit }>
            <input type="text" placeholder="Name" name="name" value={ name } onChange= { handleOnChange }/>
            <input type="email" placeholder="Email" name="email" value={ email } onChange= { handleOnChange }/>
            <input type="password" placeholder="Password" name="password" value={ password } onChange= { handleOnChange }/>
            <input type="password" placeholder="Repeat password" name="password2" value={ password2 } onChange= { handleOnChange }/>
            <button type="submit">Create</button>
        </form>
    </div>
    )
}
