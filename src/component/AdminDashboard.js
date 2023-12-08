import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9000/add', {
        title,
        about,
        img,
        price,
      });

      // Handle the response as needed
      console.log(response.data);  // You can do something with the response if needed
      setErrorMessage('');
      e.target.reset();
      alert('Login successful!');

      // You can perform additional actions based on the response if needed
      navigate('/');
      // You can display a success message or update the product list, etc.

    } catch (error) {
      console.error('Error adding product:', error.response.data.error);
      setErrorMessage(error.response.data.error || 'An error occurred during login');
      // Handle error, show error message, etc.
    }
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />

        <label>About:</label>
        <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        <br />

        <label>Image URL:</label>
        <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
        <br />

        <label>Price:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br />

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminDashboard;
