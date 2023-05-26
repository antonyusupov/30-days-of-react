import React from 'react';
import { useState } from 'react';

const FormValidate = () => {
    const [formData, setFormData] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const age = e.target.age.value;
        const degree = e.target.degree.value;
        const country = e.target.country.value;
        const city = e.target.city.value;

        const newFormData = {firstName, lastName, age, degree, country,city};

        const validateForm = () => {
            if( firstName.length <= 3) {
                alert('Name has to be bigger than 3');
            }
            else if (!firstName || !lastName || !age || !degree || !country || !city) {
                alert('You cannot submit form with empty field!');
                return
            } else { 
                setFormData([...formData, newFormData]);
                console.log(newFormData);
            }
        }
        validateForm();
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" id='firstName'name='Name'/>
            <input type="text" id='lastName'name='Surname'/>
            <input type="number" id='age'name='Age'/>
            <input type="text" id='degree'name='Degree'/>
            <input type="text" id='country'name='Country'/>
            <input type="text" id='city'name='City'/>
            <input type="submit" placeholder='Submit'/>
        </form>
    </div>
  )
}

export default FormValidate;