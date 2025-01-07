import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router';
import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import EventDescription from './pages/EventDescription';
import ForgotPassword from './pages/ForgotPassword';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { ThemeProvider } from './ThemeProvider';

//TODO: Continue With Google
//TODO: Email Login
//TODO: Sign Up
//TODO: Forgot Password
//TODO: OTP Email Verification Code and Forgot Password Confirmation
//TODO: Change Password


const Layout = () => {
  return (
    <>
      <ThemeSwitcher />
      <Outlet />
    </>
  )
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='signin' element={<Signin />} />
      <Route path='signup' element={<Signup />} />
      <Route path='forgotpassword' element={<ForgotPassword />} />
      <Route path='Eventdescription' element={<EventDescription />} />
    </Route>
  ))

function App() {
  return (
    <ThemeProvider >
      <RouterProvider router={Router} />
    </ThemeProvider>
  )
}

export default App
