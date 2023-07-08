import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Loader'
import Loader from './Loader';

import '../Styles/User.scss';


const Users = () => {
  const [page, setPage] = useState(1);
  const server = `https://reqres.in/api/users?page=${page}`;
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const handle1=()=>{
    if(page===2)
    {
      setPage(1);
      setLoading(true);
    }
  };
  const handle2=()=>{
    if(page===1)
    {
      setPage(2);
      setLoading(true);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${server}`);
        // console.log(data);
        setUsers(data.data);
        //timeOut
        setTimeout(() => {
          setLoading(false);
        }, 800);


      } catch (error) {
        console.log(error);
        //timeOut
        setTimeout(() => {
          setLoading(false);
        }, 1000);

      }

    };
    fetchUsers();

  }, [server,page])


  return <div className='container'>
    {loading ? <Loader /> :
      <>
        <div className='buttonContainer'>
          <button onClick={handle1} >Page-1</button>
          <button onClick={handle2} >Page-2</button>
        </div>
        <div className='usersContainer'>

          {
            users.map((user) => (
              <UserCard
                key={user.id}
                email={user.email}
                firstName={user.first_name}
                lastName={user.last_name}
                userImg={user.avatar}

              />
            ))
          }

        </div>
      </>


    }
  </div>
}

export default Users;

const UserCard = ({ email, firstName, lastName, userImg }) => {
  return (
    <div className='userDiv'>
      <img src={userImg} alt="UserImg" />
      <div >
        <h1>{firstName}{" "}{lastName}</h1>
        <h3>{email}</h3>
      </div>
    </div>
  )

};
