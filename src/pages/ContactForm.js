import React, { useState } from 'react';
import styles from './contact.module.scss';
import Loader from '../components/Loader';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
     try {
      const response = await fetch('https://express-hello-world-4sgw.onrender.com/portfolio/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        window.alert('Email sent');
        
      } else {
        console.error('Failed to send data');
        window.alert('Error sending messsage. Please try again later');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setTimeout(() => {
          setSending(false);
      }, 1500);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  
    // You can handle form submission here, e.g., by sending data to a server or displaying a confirmation message.
    console.log('Form submitted with the following data:');
    console.log(formData);
  }

  return (
    <div className={styles.page}>
      <h2>Contact Me</h2>
      {sending ? (
        <div className={styles.loading}>
          <h2>Sending Message...</h2>
          <Loader />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
        <div className={styles.form}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={styles.inputField}
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.form}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea
            className={styles.message}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className={styles.sendBtn}>Send Message</button>
      </form>
      )}
      
    </div>
  );
}

export default ContactForm;
