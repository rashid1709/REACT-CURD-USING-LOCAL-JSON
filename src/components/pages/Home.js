import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link,NavLink,useNavigate} from 'react-router-dom';

function Home() {
  const [users,setUser] = useState([]);
  useEffect(()=>{
    loadUser();
  });
  const loadUser = async () => {
   const result = await axios.get('http://localhost:3004/users');
   console.log(result.data);
   setUser(result.data);
  }
  const deleteUser = async (id) =>{
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUser();
  }
  return (
    <div className='container'>
     <table class="table table-dark table-striped">
        <tbody>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
            <th scope="col">Action</th>
          </tr>
          {
              users.map((user,index)=>{
                  return(
              <tr>
              <td scope="col">{index+1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td><NavLink className="btn btn-info" to={`/users/view/${user.id}`}>View</NavLink>
              <NavLink className="btn btn-primary mx-3" to={`/users/edit/${user.id}`}>Edit</NavLink>
              <NavLink className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</NavLink>
              
              </td>

            </tr>
                  )
              })

              
          }
        </tbody>
    </table>
    </div>
  )
}

export default Home
