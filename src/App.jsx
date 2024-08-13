import './App.css'
import Router from '../Router'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let timer;

    // Function to reset the inactivity timer
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        navigate('/'); // Redirect to the home page after 5 minutes of inactivity
      }, 300000); // 5 minutes = 300,000 milliseconds
    };

    // Function to set activity status and reset the timer
    const handleUserActivity = () => {
      setIsActive(true);
      resetTimer();
    };

    // Set up event listeners to detect user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    // Initialize the timer on component mount
    resetTimer();

    // Clean up event listeners and timer on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
    };
  }, [navigate]);

  return (
    <>
      <Router />
    </>
  )
}

export default App
