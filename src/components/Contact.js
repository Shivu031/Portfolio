import { useState } from 'react';
import React from 'react';
import './Contact.css'

const Contact = () => {

    const [formFields, setFormFields] = useState({
        name: '',
        email: '',
        phone: '',
        textarea: ''
      });
      const [showText, setShowText] = useState(false);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (formFields.name && formFields.email && formFields.phone && formFields.textarea) {
          setShowText(true);
        } else {
          alert('Please fill in all fields');
        }
      };
    

  return (
    <div className="contContainer">
        {!showText ? (
        <form className="formContainer" onSubmit={handleSubmit}>
            <div className="divContainer">
                <p className="text">Full Name</p>
                <input type="text" name='name' placeholder='Enter your full name' className="inputText" onChange={handleInputChange} value={formFields.name}/>
            </div>
            <div className="divContainer">
                <p className="text">Email</p>
                <input type="email" name='email' placeholder='Enter your Email' className="inputText"  onChange={handleInputChange} value={formFields.email}/>
            </div>
            <div className="divContainer">
                <p className="text">Phone Number</p>
                <input type="numeric" name='phone' placeholder='Enter your phone Number' className="inputText" onChange={handleInputChange} value={formFields.phone} />
            </div>
            <div className="divContainer">
                <p className="text">What's in your mind?</p>
                <textarea type='text' name="textarea" placeholder='Please Enter Your View' cols="50" rows="10" className="textInput" onChange={handleInputChange} value={formFields.textarea}></textarea>
            </div>
            <button className="buttonClass">Submit</button>
        </form>
        ):(
        <p className="thank">Thanks for submitting the form! <br/> I will reach u soon</p>
        )}
        
        <div className="mapContainer">
            <p className="location">Location - Bathuwa Khas, Raebareli, Up</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112278.05706348717!2d81.16562001805352!3d26.266779856079985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688367290767!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Contact
