import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserAndAdmin from './loginAndSignUpComponentsMy/UserAndAdmin';
import AdminHome from './adminComponentsMyy/AdminHome';
import UserHome from './userComponentsMyy/UserHome';
import UserCart from './userComponentsMyy/UserCart';
import AdminOptions from './adminComponentsMyy/AdminOptions';
import AdminFlatHome from './adminComponentsMyy/adminFlatComponents/AdminFlatHome';
import AdminFlats from './adminComponentsMyy/adminFlatComponents/AdminFlats';
import AdminPlotHome from './adminComponentsMyy/adminPlotComponents/AdminPlotHome';
import AdminAgriLandHome from './adminComponentsMyy/adminAgriLandComponent/AdminAgriLandHome';
import UserOptions from './userComponentsMyy/UserOptions';
import UserFlatHome from './userComponentsMyy/userFlatComponents/UserFlatHome';
import UserPlotHome from './userComponentsMyy/userPlotComponent/UserPlotHome';
import UserLandHome from './userComponentsMyy/userLandComponent/UserLandHome';
import AdminFlatAdd from './adminComponentsMyy/adminFlatComponents/AdminFlatAdd';
import AdminPlotAdd from './adminComponentsMyy/adminPlotComponents/AdminPlotAdd';
import AdminLandAdd from './adminComponentsMyy/adminAgriLandComponent/AdminLandAdd';
import AdminFlatUpdate from './adminComponentsMyy/adminFlatComponents/AdminFlatUpdate';
import AdminPlotUpdate from './adminComponentsMyy/adminPlotComponents/AdminPlotUpdate';
import AdminLandUpdate from './adminComponentsMyy/adminAgriLandComponent/AdminLandUpdate';
import AdminRegister from './loginAndSignUpComponentsMy/AdminRegister';
import AdminLogin from './loginAndSignUpComponentsMy/AdminLogin';
import UserRegister from './loginAndSignUpComponentsMy/UserRegister';
import UserLogin from './loginAndSignUpComponentsMy/UserLogin';
import UserFlatAddToCart from './userComponentsMyy/userFlatComponents/UserFlatAddToCart';
import AdminLogOut from './loginAndSignUpComponentsMy/AdminLogOut';
import AdminProfile from './loginAndSignUpComponentsMy/AdminProfile';
import AdminProfileUpdate from './loginAndSignUpComponentsMy/AdminProfileUpdate';
import UserLogOut from './loginAndSignUpComponentsMy/UserLogOut';
import UserProfile from './loginAndSignUpComponentsMy/UserProfile';
import UserProfileUpdate from './loginAndSignUpComponentsMy/UserProfileUpdate';
import UserPlotAddToCart from './userComponentsMyy/userPlotComponent/UserPlotAddToCart';
import UserLandAddToCart from './userComponentsMyy/userLandComponent/UserLandAddToCart';


const routes=createBrowserRouter([
  // {
  //   path:'/',
  //   element:<UserAndAdmin/>
  // },
  {
    path:'/admin/register/',
    element:<AdminRegister/>
  },
  {
    path:'/admin/login/',
    element:<AdminLogin/>
  },
  {
    path:'/user/register/',
    element:<UserRegister/>
  },
  {
    path:'/user/login/',
    element:<UserLogin/>
  },
  {
    path:'/admin/logout',
    element:<AdminLogOut/>
  },
  {
    path:'/user/logout',
    element:<UserLogOut/>
  },
  {
    path:'/admin/profile',
    element:<AdminProfile/>
  },
  {
    path:'/user/profile',
    element:<UserProfile/>
  },
  {
    path:'/admin/profile/update',
    element:<AdminProfileUpdate/>
  },
  {
    path:'/user/profile/update',
    element:<UserProfileUpdate/>
  },
  {
    path:'/admin',
    element:<AdminHome/>,
    children:[
      {
        path:'/admin',
        element:<AdminOptions/>
      },
      {
        path:'/admin/flat/',
        element:<AdminFlatHome/>
      },
      {
        path:'/admin/flat/add-flat/',
        element:<AdminFlatAdd/>
      },
      {
        path:'/admin/flat/update-flat/:id',
        element:<AdminFlatUpdate/>
      },
      {
        path:'/admin/plot/',
        element:<AdminPlotHome/>
      },
      {
        path:'/admin/plot/add-plot/',
        element:<AdminPlotAdd/>
      },
      {
        path:'/admin/plot/update-plot/:id',
        element:<AdminPlotUpdate/>
      },
      {
        path:'/admin/land/',
        element:<AdminAgriLandHome/>
      },
      {
        path:'/admin/land/add-land/',
        element:<AdminLandAdd/>
      },
      {
        path:'/admin/land/update-land/:id',
        element:<AdminLandUpdate/>
      }
    ]
  },
  {
    path:'/',
    element:<UserHome/>,
    children:[
      {
        path:'/',
        element:<UserOptions/>
      },
      {
        path:'/user/flat/',
        element:<UserFlatHome/>
      },
      {
        path:'/user/cart/',
        element:<UserCart/>
      },
      {
        path:'/user/flat/:id',
        element:<UserFlatAddToCart/>
      },
      {
        path:'/user/plot/:id',
        element:<UserPlotAddToCart/>
      },
      {
        path:'/user/land/:id',
        element:<UserLandAddToCart/>
      },
      {
        path:'/user/plot/',
        element:<UserPlotHome/>
      },
      {
        path:'/user/land/',
        element:<UserLandHome/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes}/>
);


