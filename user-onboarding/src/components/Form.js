import React from 'react';

export default function Form(props) {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }
  
    return (
    <div className='container'>
        <h1>My Form</h1>
    
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-col input'>
                <h3>General User Information</h3>
                <label>Name: 
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
            </div>

            <div className='form-col pass'>
                <label>Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <div>{errors.password}</div>
            </div>

            <div className='form-col TOS'>
                <h4>Please Accept the Terms of Service</h4>
                <label> You have read and agree to the terms
                    <input
                        type='checkbox'
                        name='termsOfService'
                        checked={values.termsOfService}
                        onChange={onChange}
                    />
                </label>
                <div>{errors.termsOfService}</div>
            </div>

            <div className='form-col submit'>
                <h3>Add a User</h3>
                <button id='submitBtn' disabled={disabled}>Submit</button>
            </div>

        </form>
    </div>
   )
}