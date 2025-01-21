import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const CaptainLogout =  () => {
  const navigate = useNavigate()

  useEffect(() => {

    const logoutCaptain = async () => {
    const token = localStorage.getItem('token')
    

    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        localStorage.removeItem('token');
        console.log('1')
        navigate('/captains/login');
        console.log('2')
      }
    } catch (error) {
      console.error('Logout failed:', error.response ? error.response.data : error.message);
    }
  };

  logoutCaptain();
  },[])

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout