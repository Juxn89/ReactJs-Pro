import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { ShoppingPage } from '../02-component-patters/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src= { logo } alt="React logo"/>
          <ul>
            <li>
              <NavLink to="/" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={ ({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={ ({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<ShoppingPage/>}></Route>
          <Route path='/about' element={ <h1>About Page</h1> }></Route>
          <Route path='/users' element={<h1>Users page</h1>}></Route>
          {/* <Route path='/*' element={ <Navigate to='/home' replace/> }></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
