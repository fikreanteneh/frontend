import { createBrowserRouter, createRoutesFromElements, Navigate, Outlet, Route, RouterProvider } from 'react-router';
import ThemeSwitcher from './components/ThemeSwitcher';
import AuthLayout from './pages/auth/AuthLayout';
import EmailVerification from './pages/auth/EmailVerification';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import QuillWriter from './pages/event/components/QuillEditor';
import EventDescription from './pages/EventDescription';
import { ThemeProvider } from './ThemeProvider';

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
      <Route index element={<Navigate to={"/auth/signin"} />} />
      <Route path='auth' element={<AuthLayout />}>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='eventdescription' element={<EventDescription />} />
        <Route path='resetpassword' element={<ResetPassword />} />
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
