import React, { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import NavBar from './components/NavBar';
import { useDispatch } from "react-redux";
import { loadUserFromToken } from "./slices/authSlice";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromToken());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App
