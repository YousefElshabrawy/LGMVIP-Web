import React from 'react';

import './Student.scss';

const Student = ({ student }) => {
  return (
    <div className='student'>
      <div>
        <p>
          <b>{student.name}</b>
        </p>
        <p>{student.gender} </p>
        <p>
          <a href={student.website}>{student.website}</a>
        </p>
        <p>{student.email}</p>
        <p>
          {student.languages.map((lang) => {
            if (lang) return <span key={lang}>{lang}&nbsp;</span>;
          })}
        </p>
      </div>
      <div>
        <img src={student.imageLink} alt='Student Image' />
      </div>
    </div>
  );
};

export default Student;
