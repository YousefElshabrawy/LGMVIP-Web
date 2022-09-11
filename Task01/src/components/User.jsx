import React from 'react';

import './User.scss';

const User = ({ user }) => {
  return (
    <div className='user'>
      <div>
        <p>
          <b>First Name: &nbsp;</b>
          {user.first_name}
        </p>
        <p>
          <b>Last Name: &nbsp;</b>
          {user.last_name}
        </p>
        <p>
          <b>Email: &nbsp;</b>
          {user.email}
        </p>
      </div>
      <div>
        <img src={user.avatar} alt='User Avatar' />
      </div>
    </div>
  );
};

export default User;
