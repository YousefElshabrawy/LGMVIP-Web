import React, { useState } from 'react';

import './Home.scss';
import Navbar from '../layout/Navbar';
import Form from '../components/Form';
import Student from '../components/Student';

const Home = () => {
  const [students, setStudents] = useState([]);
  const addStudent = (student) => {
    console.log(student);
    setStudents((students) => [...students, student]);
    console.log(students);
  };
  return (
    <>
      <Navbar />
      <main className='home'>
        <Form addStudent={addStudent} />
        <div>
          <h2>Enrolled Students</h2>
          {students.map((student) => (
            <Student student={student} key={student.email} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
