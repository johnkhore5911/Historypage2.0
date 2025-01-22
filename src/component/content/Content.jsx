import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Content.css";

const Content = () => {
  const [activeImage, setActiveImage] = useState([]); // To track the active image for each user
  
   const [users, setUsers] = useState([]);

    // Fetch user data
    useEffect(() => {
    axios
      .get("https://history-page-backend-x2dq.vercel.app/api/user/getAllUsers")
      .then((response) => {
        setUsers(response.data);
        setActiveImage(response.data.map(() => 0)); // Initialize activeImage state
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







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Content.css';

// const Content = () => {
//   const [users, setUsers] = useState([]);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [images, setImages] = useState([]); // To store more images
//   const [activeImage, setActiveImage] = useState([]); // To track the active image for each user

//   useEffect(() => {
//     axios.get('https://history-page-backend-x2dq.vercel.app/api/user/getAllUsers') // Corrected URL syntax
//       .then(response => {
//         setUsers(response.data);
//         // Initialize activeImage state for each user
//         setActiveImage(response.data.map(() => 0));
//       }).catch(error => {
//         console.error('Error fetching data: ', error);
//       });
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);

//     // Add images to the form
//     images.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       const response = await axios.post('https://history-page-backend-x2dq.vercel.app/api/user/createImg', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Data posted successfully:', response.data);
//       alert('Data posted successfully!');
//     } catch (error) {
//       console.error('Error posting data: ', error);
//       alert('Error posting data.');
//     }
//   };

//   const handlePrevImage = (index) => {
//     setActiveImage((prev) =>
//       prev.map((imgIndex, i) =>
//         i === index ? (imgIndex > 0 ? imgIndex - 1 : users[index].Image.length - 1) : imgIndex
//       )
//     );
//   };

//   const handleNextImage = (index) => {
//     setActiveImage((prev) =>
//       prev.map((imgIndex, i) =>
//         i === index ? (imgIndex + 1) % users[index].Image.length : imgIndex
//       )
//     );
//   };

//   return (
//     <div className="App">
//       {/* Display users */}
//       <div className="user-grid">
//         {users.map((user, index) => (
//           <div className="user-block" key={index}>
//             <div className="user-header">
//               <h2>{user.title}</h2>
//             </div>
//             <div className="user-images">
//               <button
//                 className="arrow left"
//                 onClick={() => handlePrevImage(index)}
//               >
//                 &#9664;
//               </button>
//               {user.Image && user.Image.length > 0 ? (
//                 <img
//                   src={user.Image[activeImage[index]]}
//                   alt={`Event ${user.title}`}
//                   onError={(e) => {
//                     e.target.src = 'https://via.placeholder.com/300'; // Fallback image
//                     e.target.alt = 'Image not available';
//                   }}
//                 />
//               ) : (
//                 <p>No images available</p>
//               )}
//               <button
//                 className="arrow right"
//                 onClick={() => handleNextImage(index)}
//               >
//                 &#9654;
//               </button>
//             </div>
//             <div className="user-body">
//               <p>{user.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add data */}
//  
//   );
// };

// export default Content;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Content.css'; // Assuming CSS for styling

// const Content = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch events from the API
//     axios
//       .get('https://historypage-cyan.vercel.app/api/user/getAllUsers')
//       .then((response) => {
//         console.log('API response:', response.data); // Check the structure of response.data
//         setEvents(response.data); // Assuming the API returns an array of event objects
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching events:', err);
//         setError('Failed to fetch events. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="content">
//       <div className="event-grid">
//         {events.map((event) => (
//           <div className="event-block" key={event.id}>
//             <div className="event-images">
//               {/* Check if event.Image exists and is an array */}
//               {event.Image && event.Image.length > 0 && event.Image.map((image, index) => (
//                 <img
//                   src={image}
//                   alt={`Event ${event.id} - Image ${index + 1}`}
//                   key={index}
//                   className="event-image"
//                 />
//               ))}
//             </div>
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Content;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Content.css'; // Assuming CSS for styling

// const Content = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch events from the API
//     axios
//       .get('https://historypage-cyan.vercel.app/api/user/getAllUsers')
//       .then((response) => {
//         setEvents(response.data); // Assuming the API returns an array of event objects
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching events:', err);
//         setError('Failed to fetch events. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading events...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="content">
//       <div className="event-grid">
//         {events.map((event) => (
//           <div className="event-block" key={event.id}>
//             <div className="event-images">
//               {event.images && event.images.map((image, index) => (
//                 <img
//                   src={image}
//                   alt={`Event ${event.id} - Image ${index + 1}`}
//                   key={index}
//                   className="event-image"
//                 />
//               ))}
//             </div>
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Content;
