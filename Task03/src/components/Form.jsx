import React, { useState } from 'react';

import './Form.scss';

const Form = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [htmlIsChecked, setHtmlIsChecked] = useState(false);
  const [cssIsChecked, setCssIsChecked] = useState(false);
  const [javascriptIsChecked, setJavascriptIsChecked] = useState(false);
  const [maleIsChecked, setMaleIsChecked] = useState(false);
  const [femaleIsChecked, setFemaleIsChecked] = useState(false);
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const websiteChangeHandler = (e) => {
    setWebsite(e.target.value);
  };
  const imageLinkChangeHandler = (e) => {
    setImageLink(e.target.value);
  };
  const htmlCheckboxChangeHandler = (e) => {
    setHtmlIsChecked(e.target.checked);
  };
  const cssCheckboxChangeHandler = (e) => {
    setCssIsChecked(e.target.checked);
  };
  const javascriptCheckboxChangeHandler = (e) => {
    setJavascriptIsChecked(e.target.checked);
  };
  const maleRadioChangeHandler = (e) => {
    setMaleIsChecked(e.target.checked);
  };
  const femaleRadioChangeHandler = (e) => {
    setFemaleIsChecked(e.target.checked);
  };
  const clearFields = () => {
    setName('');
    setEmail('');
    setWebsite('');
    setImageLink('');
    setHtmlIsChecked(false);
    setCssIsChecked(false);
    setJavascriptIsChecked(false);
    setMaleIsChecked(false);
    setFemaleIsChecked(false);
  };
  const enrollButtonClickHandler = () => {
    if (!(name.trim() && email.trim() && website.trim() && imageLink.trim()))
      return;
    const student = {
      name,
      email,
      website,
      imageLink,
      languages: [
        htmlIsChecked && 'HTML',
        cssIsChecked && 'CSS',
        javascriptIsChecked && 'JavaScript',
      ],
      gender: maleIsChecked ? 'Male' : femaleIsChecked ? 'Female' : '',
    };
    addStudent(student);
    clearFields();
  };
  const clearButtonClickHandler = () => {
    clearFields();
  };
  return (
    <form className='form'>
      <div className='form__group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          value={name}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          value={email}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='website'>Website</label>
        <input
          type='text'
          id='website'
          onChange={websiteChangeHandler}
          value={website}
        />
      </div>
      <div className='form__group'>
        <label htmlFor='imageLink'>Image Link</label>
        <input
          type='text'
          id='imageLink'
          onChange={imageLinkChangeHandler}
          value={imageLink}
        />
      </div>
      <fieldset>
        <legend>Select your gender:</legend>
        <div>
          <input
            type='radio'
            id='male'
            name='gender'
            value='male'
            checked={maleIsChecked}
            onChange={maleRadioChangeHandler}
          />
          <label htmlFor='male'>Male</label>
        </div>
        <div>
          <input
            type='radio'
            id='female'
            name='gender'
            value='female'
            checked={femaleIsChecked}
            onChange={femaleRadioChangeHandler}
          />
          <label htmlFor='female'>Female</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Choose your monster's skills:</legend>
        <div>
          <input
            type='checkbox'
            id='html'
            name='html'
            value='html'
            checked={htmlIsChecked}
            onChange={htmlCheckboxChangeHandler}
          />
          <label htmlFor='html'>HTML</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='css'
            name='css'
            value='css'
            checked={cssIsChecked}
            onChange={cssCheckboxChangeHandler}
          />
          <label htmlFor='css'>CSS</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='javascript'
            name='javascript'
            value='javascript'
            checked={javascriptIsChecked}
            onChange={javascriptCheckboxChangeHandler}
          />
          <label htmlFor='javascript'>JavaScript</label>
        </div>
      </fieldset>
      <div className='form__actions'>
        <button type='button' onClick={enrollButtonClickHandler}>
          Enroll Student
        </button>
        <button type='button' onClick={clearButtonClickHandler}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default Form;
