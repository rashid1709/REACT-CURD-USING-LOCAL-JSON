import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';

function EditUser() {
    const {id} = useParams();
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
  })

  useEffect(()=>{
    loadUser();
  },[])
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUser(result.data);
  }
   const {name,username,phone,email,website} = user;
    const handleChange = (e) => {
       setUser({
        ...user,[e.target.name]:e.target.value
       })
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
       
       await axios.put(`http://localhost:3004/users/${id}`,user);
       navigate('/');
        
    }
  return (
    <div className='container'>
      <h1 className='text-center text-primary'>Edit A User</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group my-2'>
            <input type='text' name='name' value={user.name} placeholder='enter your name' className='form-control' 
           onChange={handleChange} /> 
        </div>
        <div className='form-group my-2'>
            <input type='text' name='username' value={user.username} placeholder='enter your username' className='form-control' 
           onChange={handleChange} /> 
        </div>
        <div className='form-group my-2'>
            <input type='text' name='email'value={user.email} placeholder='enter your email' className='form-control' 
           onChange={handleChange} />
        </div>
       
        <div className='form-group my-2'>
            <input type='text' name='phone' value={user.phone} placeholder='enter your phone' className='form-control' 
           onChange={handleChange} />
        </div>
        <div className='form-group my-2'>
            <input type='text' name='website' value={user.website} placeholder='enter your website name' className='form-control' 
           onChange={handleChange} />
        </div>
        <div className='form-group my-2'>
           <button className='btn btn-outline-primary btn-block'>Update User</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
