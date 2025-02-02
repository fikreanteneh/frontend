import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router';
import GlowingBackground from './components/GlowingBackground';
import ThemeSwitcher from './components/ThemeSwitcher';
import AuthLayout from './pages/auth/AuthLayout';
import EmailVerification from './pages/auth/EmailVerification';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPasword from './pages/auth/ResetPassword';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import QuillWriter from './pages/event/components/QuillEditor';
import EventDescription from './pages/EventDescription';
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
      <Route index element={<GlowingBackground />} />
      <Route path='auth' element={<AuthLayout />}>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='Eventdescription' element={<EventDescription />} />
        <Route path='resetpassword' element={<ResetPasword />} />
        <Route path='verifyemail' element={<EmailVerification />} />
      </Route>
      <Route path='/editor' element={<QuillWriter />} />
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
