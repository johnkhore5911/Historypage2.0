import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Content.css";

const Content = () => {
  const [activeImage, setActiveImage] = useState([]); // To track the active image for each user
  
   const [users, setUsers] = useState([]);

    // Fetch user data
    useEffect(() => {
    axios
      .get('https://history-page-backend-x2dq.vercel.app/api/user/getAllUsers')
      .then((response) => {
        setUsers(response.data);
        setActiveImage(response.data.map(() => 0)); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      }
    );
   },[])
  
  const handlePrevImage = (index) => {
    setActiveImage((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex > 0 ? imgIndex - 1 : users[index].Image.length - 1) : imgIndex
      ));
  };

  const handleNextImage = (index) => {
    setActiveImage((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % users[index].Image.length : imgIndex
      )
    );
  };

  return (
    <div className="App">
      {/* Display users */}
      <div className="user-grid">
        {users.map((user, index) => (
          <div className="user-block" key={index}>
            <div className="user-header">
             
             <div className="header"> <h2>{user.title}</h2></div>
            </div>
            <div className="user-images">
              <button
                className="arrow left"
                onClick={() => handlePrevImage(index)}
              >
                &#9664;
              </button>
              {user.Image && user.Image.length > 0 ? (
                <img
                  src={user.Image[activeImage[index]]}
                  alt={`Event ${user.title}`}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300"; // Fallback image
                    e.target.alt = "Image not available";
                  }}
                />
              ) : (
                <p>No images available</p>
              )}
              <button
                className="arrow right"
                onClick={() => handleNextImage(index)}
      >
             <pre> &#9654;</pre>  
              </button>
            </div>
            
            <div className="user-body">
              <p>{user.description}</p>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default Content;







