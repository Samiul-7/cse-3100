import React from 'react';
import nanami from '../assets/nanami.jpg'; 
import luffy from '../assets/luffy.jpg';

const AboutUs = () => {
  return (
    <div style={{ textAlign: 'left', padding: '20px' }}>
      <h1>Our Mission</h1>
      <p>
        At Purrfect Adoption, we are dedicated to uniting loving families with cats 
        in need of a forever home. Every cat deserves a cozy lap and a caring heart, 
        and we strive to make that connection possible. Together, we can create a 
        purr-fect world, one adoption at a time!!
      </p>
      
      <h1>Our History</h1>
      <p>
        We have helped 50 cats to get a family of its own. Just tell us your requirements 
        and we will bring you your most loving furry friend!
      </p>
      <h1>Our Team</h1>
      {/* flex used so trhat the cards display parallely */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* card used for image */}
        <div style={{ width: '300px', border: '1px solid grey', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <img 
            src={luffy} 
            alt="Luffy" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h3 style={{ marginTop: '10px' }}>Luffy</h3>
          <p>Director</p>
        </div>
        {/* card used for image */}
        <div style={{ width: '300px', border: '1px solid grey', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
          <img 
            src={nanami} 
            alt="Nanami" 
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
          />
          <h3 style={{ marginTop: '10px' }}>Nanami</h3>
          <p>Manager</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
