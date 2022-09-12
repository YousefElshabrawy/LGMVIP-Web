import React, { useState } from 'react';

import { ThreeDots } from 'react-loader-spinner';

import './Home.scss';
import Navbar from '../layout/Navbar';
import User from '../components/User';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getUsers = () => {
    setIsLoading(true);
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setUsers(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar getUsers={getUsers} />
      <main className='home'>
        {isLoading && (
          <div className='spinner'>
            <ThreeDots
              height='80'
              width='80'
              radius='9'
              color='#0d9488'
              ariaLabel='three-dots-loading'
              wrapperStyle={{}}
              wrapperClassName=''
              visible={true}
            />
          </div>
        )}
        {!isLoading && users.map((user) => <User user={user} />)}
      </main>
    </>
  );
};

export default Home;
