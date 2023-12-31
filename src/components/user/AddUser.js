import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
  })
  // const {name,username,phone,email,website} = user;
    const handleChange = (e) => {
       setUser({
        ...user,[e.target.name]:e.target.value
       })
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        console.log(user);
       await axios.post("http://localhost:3004/users",user);
       navigate('/');
        
    }
  return (
    <div className='container'>
      <h1 className='text-center text-primary'>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group my-2'>
            <input type='text' name='name' placeholder='enter your name' className='form-control' 
           onChange={handleChange} /> 
        </div>
        <div className='form-group my-2'>
            <input type='text' name='username' placeholder='enter your username' className='form-control' 
           onChange={handleChange} /> 
        </div>
        <div className='form-group my-2'>
            <input type='text' name='email' placeholder='enter your email' className='form-control' 
           onChange={handleChange} />
        </div>
       
        <div className='form-group my-2'>
            <input type='text' name='phone' placeholder='enter your phone' className='form-control' 
           onChange={handleChange} />
        </div>
        <div className='form-group my-2'>
            <input type='text' name='website' placeholder='enter your website name' className='form-control' 
           onChange={handleChange} />
        </div>
        <div className='form-group my-2'>
           <button className='btn btn-outline-primary btn-block'>Add User</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
