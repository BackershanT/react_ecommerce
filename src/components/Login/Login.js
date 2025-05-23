import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    localStorage.setItem('token', res.data.token);
    alert("Logged in!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
