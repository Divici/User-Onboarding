import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  return (
    <div className="App">
      < Form />
    </div>
  );
}

export default App;
