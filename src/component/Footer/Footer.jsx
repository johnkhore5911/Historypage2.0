// Footer.js
import React,{useState,useEffect} from 'react';
import './footer.css'


const Footer = () => {

  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [images, setImages] = useState([]); // To store more images
  // const [isAdmin, setIsAdmin] = useState(false); // Track admin access

  // useEffect(() => {
  //   // Simulate admin check (e.g., based on token or user role)
  //   const token = localStorage.getItem("authToken"); // Assume token stored in localStorage
  //   axios
  //     .post("https://history-page-backend-x2dq.vercel.app/api/user/getAllUsers", { token })
  //     .then((response) => {
  //       if (response.data.isAdmin) {
  //         setIsAdmin(true); // Grant access if the user is admin
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Authorization check failed:", error);
  //       setIsAdmin(false); // Deny access on failure
  //     });


  // }, [])


  // useEffect(() => {
  //   // Simulate admin check (e.g., based on token or user role)
  //   const token = localStorage.getItem("authToken"); // Assume token stored in localStorage
  //   axios
  //     .post("https://your-auth-endpoint.com/verify", { token })
  //     .then((response) => {
  //       if (response.data.isAdmin) {
  //         setIsAdmin(true); // Grant access if the user is admin
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Authorization check failed:", error);
  //       setIsAdmin(false); // Deny access on failure
  //     }); 
  // }, [])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);

  //   // Add images to the form
  //   images.forEach((image) => {
  //     formData.append("images", image);
  //   });

  //   try {
  //     const response = await axios.post(
  //       "https://history-page-backend-x2dq.vercel.app/api/user/createImg",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //     console.log("Data posted successfully:", response.data);
  //     alert("Data posted successfully!");
  //   } catch (error) {
  //     console.error("Error posting data: ", error);
  //     alert("Error posting data.");
  //   }
  // };



  
  return (
    <footer className="footer">
      <div className="footer-sections">
        {/* Section 1 */}
        <div className="footer-section">
          <ul>
            <li><a href="/link1"> n</a></li>
            <li><a href="/link2">Link 2</a></li>
            <li><a href="/link3">Link 3</a></li>
           
            <li><a href="/link5">Link 5</a></li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="footer-section">
          <ul>
            <li><a href="/link6"> n</a></li>
            <li><a href="/link7">Link 7</a></li>
            <li><a href="/link8">Link 8</a></li>
           
            <li><a href="/link10">L 0</a></li>
          </ul>
        </div>

        {/* Section 3 */}
       
      {/* Display form only if the user is an admin */}
    
      {/* {
        <form onSubmit={handleSubmit} className="post-form">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div> */}

          {/* <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="images">Upload Images:</label>
            <input
              type="file"
              id="images"
              multiple // Allow multiple files
              onChange={(e) => setImages([...e.target.files])} // Store files in array
              required
            />
          </div>
          <button type="submit">Post Data</button>
        </form>
    }
  
      {!isAdmin && <p>You do not have permission to upload event details.</p>}
 
      </div>  */}
      </div>
      </footer>
  );
};

export default Footer;
