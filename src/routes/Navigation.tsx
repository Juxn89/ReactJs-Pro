import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  const defaultRoute = routes[0].to;

  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src= { logo } alt="React logo"/>
            <ul>
              {
                routes.map( ({to, name}) => (
                  <li key={ to }>
                    <NavLink to={ to } className={ ({isActive}) => isActive ? 'nav-active' : ''}> {name} </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map( ({path, Component}) => (
                <Route key={path} path={ path } element={ <Component /> }></Route>
              ))
            }

            <Route path='/*' element={ <Navigate to={ defaultRoute } replace/> }></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>

  )
}
