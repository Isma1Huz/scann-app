import React, { useState, useEffect } from 'react';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import Homescreen from './screens/Homescreen';
// import QRCodeScannerScreen from './screens/QRCodeScannerScreen'
import ScanningPage from './screens/ScanningPage';

const Navigation = () => {
  const [currentScreen, setCurrentScreen] = useState('Splash'); // Initial screen is 'Splash'

  // Simulate a delay for the splash screen
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen('Login'); // After a delay, navigate to the Login screen
    }, 2000); // Adjust the delay time as needed
  }, []);

  // Function to navigate to a different screen
  function navigateToScreen(screenName){
    setCurrentScreen(screenName);
  };

  // Render the current screen based on the state
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Splash':
        return <SplashScreen />;
      case 'Login':
        return <LoginScreen navigate={navigateToScreen} />;
      case 'Home':
        return <Homescreen navigate={navigateToScreen} />;
      case 'Scan':
        return <ScanningPage navigate={navigateToScreen} />;
      // case 'Attendance':
      default:
        return null;
    }
  };

  return <>{renderScreen()}</>;
};

export default Navigation;

