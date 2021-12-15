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
            </div>

            <div className='form-col pass'>

            </div>

            <div className='form-col TOS'>

            </div>

        </form>
    </div>
   )
}