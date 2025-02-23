import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Content.css';

const Content = () => {
  const [data, setData] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://historypage-cyan.vercel.app/api/user/getAllUsers');
        console.log('API Response:', response.data);

        if (!Array.isArray(response.data)) {
          throw new Error('Data is not in expected format');
        }

        const formattedData = response.data.map((item) => ({
          ...item,
          Image: Array.isArray(item.Image) ? item.Image : [],
        }));

        setData(formattedData);
        setActiveImageIndex(formattedData.map(() => 0)); // Initialize all image indexes at 0
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);

  // Auto-slide images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndexes) =>
        prevIndexes.map((index, i) =>
          data[i]?.Image.length > 1 ? (index + 1) % data[i].Image.length : index
        )
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [data]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
    e.target.classList.add('error-image');
  };

  return (
    <main className="content">
      <div className="content-grid">
        {data.map((item, index) => (
          <article key={item._id || index} className="content-card">
            <div className="image-container">
              {item.Image.length > 0 ? (
                <img
                  src={item.Image[activeImageIndex[index]]}
                  alt={item.title || 'Content image'}
                  className="content-image fade-in"
                  onError={handleImageError}
                />
              ) : (
                <div className="no-image">
                  <span>No image available</span>
                </div>
              )}
            </div>
            <div className="card-content">
              <h2>{item.title || 'Untitled'}</h2>
              <p>{item.description || 'No description available'}</p>
              {item.Image.length > 1 && (
                <small className="image-counter">
                  Image {activeImageIndex[index] + 1} of {item.Image.length}
                </small>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Content;
