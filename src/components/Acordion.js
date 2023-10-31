// Accordion.js
import React, { useState } from 'react';
import styles from './accordion.module.css';

const Accordion = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    if (index === activeSection) {
      // If the same section is clicked, close it.
      setActiveSection(null);
    } else {
      // Open the clicked section.
      setActiveSection(index);
    }
  };

  return (
    <div className={styles.accordion}>
      {sections.map((section, index) => (
        <div key={index} className={ activeSection === index ? styles.activeSection : styles.section }>
          <div
            className={styles.sectionHeader}
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span className={activeSection === index ? styles.iconOpen : styles.iconClosed}>
              V
            </span>
          </div>
          {activeSection === index && (
            <div className={styles.sectionContent}
            
            >
             <p>{section.content}</p> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
