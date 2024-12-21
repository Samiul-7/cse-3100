import React, { useState } from 'react';

const ContactUsPage = () => {
  // creating variables for input
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // taking input
  const handleChange = (e) => {   
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted. Thank you!');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '28%' }}>
        <h2>Contact Us</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '10px 0' }}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '10px 0' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '10px 0' }}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', margin: '10px 0', height: '100px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: 'tomato',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div style={{ width: '48%' }}>
        <p>
        We are delighted that you are considering adopting a cat! If you have any questions, 
        need more information, or wish to discuss the adoption process, 
        feel free to reach out to us. We are here to help you find the purrfect companion.
        If you are interested in adopting one of our adorable cats, please fill out the form below. 
        Provide us with some details about yourself, your experience with pets, and any preferences 
        you may have for your new furry friend.
        </p>
      </div>
    </div>
  );
};

export default ContactUsPage;
