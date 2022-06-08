import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
import { RegisterPage } from '../pages/RegisterPage';

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
          </ul>
        </nav>

        <Routes>
          <Route path='/about' element={ <h1>About Page</h1> }></Route>
          <Route path='/users' element={<h1>Users page</h1>}></Route>
          <Route path='/home' element={<h1>About page</h1>}></Route>
          <Route path='/register' element={ <RegisterPage/> }></Route>
          <Route path='/*' element={ <Navigate to='/home' replace/> }></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
