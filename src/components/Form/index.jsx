import React from 'react';
import Button from '../Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <Input />

      <Button text='Submit' />
      <Button text='hi' />
    </form>
  );
};

export default Form;
