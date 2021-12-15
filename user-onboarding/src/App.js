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

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) =>{

  }

  const formSubmit = () => {
    
  }

  return (
    <div className="App">
      < Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
