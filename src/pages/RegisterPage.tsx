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
    const { formData, handleOnChange, resetForm, isValidEmail } = useForm(initialData);

     const { name, email, password, password2 } = formData;

     const handleOnSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
     }

    return (
    <div>
        <h1>Register Page</h1>
        <form noValidate onSubmit={ handleOnSubmit }>
            <input type="text" placeholder="Name" name="name" value={ name } onChange= { handleOnChange } className={ `${name.trim().length <= 0 && "has-error"}` }/>
            { name.trim().length <= 0 && <span>This field is required</span> }

            <input type="email" placeholder="Email" name="email" value={ email } onChange= { handleOnChange } className={ `${ !isValidEmail(email) && "has-error" }` }/>
            { !isValidEmail(email) && <span>This field is required</span> }

            <input type="password" placeholder="Password" name="password" value={ password } onChange= { handleOnChange }/>
            { password.trim().length <= 0 && <span>This field is required</span> }
            { (password.trim().length > 0 && password.trim().length < 6) && <span>This field is must have at least 6 characters</span> }

            <input type="password" placeholder="Repeat password" name="password2" value={ password2 } onChange= { handleOnChange }/>
            { password2.trim().length <= 0 && <span>This field is required</span> }
            { (password2.trim().length > 0 && password2.trim().length < 6) && <span>This field is must have at least 6 characters</span> }
            { (password2.trim().length >= 6 && password.trim() !== password2.trim()) && <span>Passwords are not equals.</span> }

            <button type="submit">Create</button>
            <button type="button" onClick={ resetForm }>Reset</button>
        </form>
    </div>
    )
}
