import React, { useState } from 'react';
import axios from 'axios';
import './dataUpload.css'; // Add CSS for styling the form

const dataUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || images.length === 0) {
      setError('Please fill all fields and upload at least one image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    images.forEach((image) => formData.append('images', image));

    try {
      const response = await axios.post(
        'https://history-page-backend-x2dq.vercel.app/api/user/createImg',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      if (response.status === 200) {
        setMessage('Event successfully uploaded!');
        setTitle('');
        setDescription('');
        setImages([]);
        setError('');
      }
    } catch (err) {
      console.error('Error uploading event:', err);
      setError('Failed to upload the event. Please try again.');
    }
  };

  return (
    <div className="data-upload">
      <h1>Upload Event Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Event Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Event Description *</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="images">Event Images *</label>
          <input
            type="file"
            id="images"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />
          {images.length > 0 && (
            <p>{images.length} image(s) selected</p>
          )}
        </div>

        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}

        <button type="submit">Upload Event</button>
      </form>
    </div>
  );
};

export default dataUpload;
