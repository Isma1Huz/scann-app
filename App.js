import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Navigation'
import ScanninPage from './screens/ScanningPage'

const App = () => {
  return (
    <View >
      <Navigation />
      {/* <ScanninPage/> */}
    </View>
  )
}

export default App

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'gray',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })








































// import React, { useEffect, useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// const BuildingCoordinates = { latitude: 123.456, longitude: 789.012 };
// const ProximityRadius = 0.00009; // Roughly 10 meters in latitude/longitude units

// const App = () => {
//   const [userLocation, setUserLocation] = useState(null);
//   const [isWithinProximity, setIsWithinProximity] = useState(false);

//   useEffect(() => {
//     // Check if the user has granted location permissions
//     Geolocation.requestAuthorization();

//     // Get the user's current location
//     Geolocation.getCurrentPosition(
//       (position) => {
//         setUserLocation({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });

//         // Calculate the distance between user and building
//         const distance = calculateDistance(
//           position.coords.latitude,
//           position.coords.longitude,
//           BuildingCoordinates.latitude,
//           BuildingCoordinates.longitude
//         );

//         // Check if the user is within proximity
//         setIsWithinProximity(distance <= ProximityRadius);
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }, []);

//   function calculateDistance(lat1, lon1, lat2, lon2) {
//     // Implement your distance calculation logic here
//     // You can use the Haversine formula or a library like 'geolib'
//     // Return the distance in latitude/longitude units.
//   }

//   return (
//     <View>
//       {isWithinProximity ? (
//         <Button title="Activate Button" onPress={() => { /* Button action */ }} />
//       ) : (
//         <Text>You are not within the specified range.</Text>
//       )}
//       <Text>iSMAEL </Text>
//     </View>
//   );
// };

// export default App;

































































