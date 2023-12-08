// HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../Login.css"
import Product from './Product';

function HomeScreen() {
  return (
    <div>
        <Link to="/login">
            <button className='IN'>Login</button>
        </Link>
        <Link to="/signIn">
            <button className='OUT'>Sign In</button>
        </Link>
        <Link to="/admin"><button className='OUT'>Login as admin</button></Link>
        <Product/>
    </div>
  );
}

export default HomeScreen;
