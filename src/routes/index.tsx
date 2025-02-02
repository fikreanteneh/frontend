import AuthLayout from "@/pages/auth/AuthLayout";
import EmailVerification from "@/pages/auth/EmailVerification";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import QuillWriter from "@/pages/event/components/QuillEditor";
import EventDescription from "@/pages/EventDescription";
import Home from "@/pages/Home";
import RootLayout from "@/pages/RootLayout";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>

      <Route index element={<Navigate to={"/auth/signin"} />} />

      <Route path='auth' element={<AuthLayout />}>
        <Route element={<PublicRoute />}>
          <Route path='signin' element={<Signin />} />
          <Route path='signup' element={<Signup />} />
          <Route path='forgotpassword' element={<ForgotPassword />} />
          <Route path='eventdescription' element={<EventDescription />} />
          <Route path='resetpassword' element={<ResetPassword />} />
          <Route path='verifyemail' element={<EmailVerification />} />
        </Route>
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='home' element={<Home />} />
        <Route path='editor' element={<QuillWriter />} />
      </Route>

    </Route>
  )
);

export default Router;