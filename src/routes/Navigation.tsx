import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';

import { FormikBasicPage } from '../pages/FormikBasicPage';
import { FormikYupPage } from '../pages/FormikYupPage';
import { RegisterPage } from '../pages/RegisterPage';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src= { logo } alt="React logo"/>
          <ul>
            <li>
              <NavLink to="home" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={ <h1>About Page</h1> }></Route>
          <Route path='/users' element={<h1>Users page</h1>}></Route>
          <Route path='/home' element={<h1>About page</h1>}></Route>
          <Route path='/register' element={ <RegisterPage/> }></Route>
          <Route path='/formik-basic' element={ <FormikBasicPage/> }></Route>
          <Route path='/formik-yup' element={ <FormikYupPage/> }></Route>
          <Route path='/*' element={ <Navigate to='/home' replace/> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
