import React from 'react';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import './Navbar.scss';

const Navbar = ({ getUsers }) => {
  return (
    <nav className='navbar'>
      <div>
        <a href=''>User4U</a>
      </div>
      <div>
        <button onClick={getUsers}>
          <span>Get Users </span>
          <PeopleAltIcon fontSize='large' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
