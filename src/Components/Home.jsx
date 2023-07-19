import React from 'react'
import '../Styles/Home.scss';
import { Link } from 'react-router-dom';
import Users from './Users';

const Home = () => {
 

    return (
        <div className='home'>
            <h1>Welcome to Lets Grow More</h1>
            <div className='userDiv'>
                <h2> To Get Users</h2>
                <Link className='usersButton' to={'/users'}>Click Here</Link>
            </div>
        </div>
    )
}

export default Home