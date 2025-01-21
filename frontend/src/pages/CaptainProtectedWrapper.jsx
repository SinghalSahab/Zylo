import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/captains/login');
      return;
    }
    let isMounted = true;
    const fetchCaptainProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch captain profile:', error.response ? error.response.data : error.message);
        localStorage.removeItem('token');
        navigate('/captains/login');
      }
    };

    fetchCaptainProfile();

    return () => {
      isMounted = false;
    };
  }, [token, navigate, setCaptain]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;