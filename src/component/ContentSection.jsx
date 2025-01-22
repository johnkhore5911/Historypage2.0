import React from 'react';

function ContentSection({ image, title, description }) {
  return (
    <div style={styles.section}>
      <img src={image} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  section: { border: '1px solid #000', borderRadius: '8px', margin :'19px',padding: '20px', maxWidth: '350px', textAlign: 'left', backgroundColor: '#00008B.' },
  image: { width: '100%', borderRadius: '8px', marginBottom: '1rem' },
  title: { fontSize: '1.25rem', marginBottom: '0.5rem', color: '#0000FF' },
  description: { fontSize: '1rem', lineHeight: '1.5' },
};

export default ContentSection;
