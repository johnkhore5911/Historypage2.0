import React from 'react'
import { useNavigate } from 'react-router-dom';
function VerificationPage() {


const Verification=()=>{
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginClick = () => {
    navigate('/login'); // Replace '/login' with your login page route
  };

}

  return (

    <div>
      
<button className=''
onClick={Verification}> submit </button>
     
      
      </div>
   
  )
}

export default VerificationPage