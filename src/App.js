import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import SignUp from './component/SignUp';
import Login from './component/LoginPage';
import Home from './component/Home';
import ForgotPassword from "./component/FogotPasswordPage";
import ResetPassword from './component/ResetPassword';
import NotFound from './component/NotFound';
import ProtectedRoute from './component/ProtectedRoute';

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
       
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</Provider>
);

export default App;
