import React, { useState } from 'react';
import styles from './contact.module.css';
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., by sending data to a server or displaying a confirmation message.
    console.log('Form submitted with the following data:');
    console.log(formData);
  }

  return (
    <div className={styles.page}>
      <h2>Contact Me</h2>
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
    </div>
  );
}

export default ContactForm;
