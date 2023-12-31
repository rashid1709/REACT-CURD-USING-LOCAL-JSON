import React, { useEffect, useState } from 'react';
import {useParams,useNavigate, NavLink} from 'react-router-dom';
import axios from 'axios';

function View() {
    const {id} = useParams();
    const navigate =  useNavigate();
    const [user,setUser] = useState([]);
    useEffect(()=>{
        loadUser();
    })
    const loadUser = async() => {
        const result = await axios.get(`http://localhost:3004/users/${id}`);
        setUser(result.data);
    }
  return (
    <div className='container'>
        <h1 className='text-center text-primary my-3'>Display a User</h1>
        <NavLink className="btn btn-primary my-2" to={`/`}>Back</NavLink>
      
      <h1>User Id: {id}</h1>
        <ul class="list-group">
            <li class="list-group-item">{user.name}</li>
            <li class="list-group-item">{user.username}</li>
            <li class="list-group-item">{user.email}</li>
            <li class="list-group-item">{user.phone}</li>
            <li class="list-group-item">{user.website}</li>
        </ul>
    </div>
  )
}

export default View
