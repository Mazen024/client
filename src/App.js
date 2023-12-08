// import logo from './logo.svg';
import React from 'react'; // Import React
import './App.css';
import HomeScreen from './component/HomeScreen';
import Login from './component/Login';
import SignInScreen from './component/SignIn';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './component/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signIn" element={<SignInScreen />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
