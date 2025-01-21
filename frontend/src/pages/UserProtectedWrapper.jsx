import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/users/login');
      return;
    }
    let isMounted = true;
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error.response ? error.response.data : error.message);
        localStorage.removeItem('token');
        navigate('/users/login');
      }
    };

    fetchUserProfile();

    return () => {
      isMounted = false;
    };
  }, [token, navigate, setUser]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;