// import React, { useState, useEffect } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import { Directions } from 'react-native-directions';
// import * as Location from 'expo-location';
// import { View, Text } from 'react-native';

// const DirectionsScreen = () => {
//   const [currentLocation, setCurrentLocation] = useState(null);
//   const [destination, setDestination] = useState({
//     latitude: -1.272726,
//     longitude: 36.71989,
//     title: 'Kiambu',
//   });

//   useEffect(() => {
//     (async () => {
//       const location = await Location.getCurrentPositionAsync({});
//       setCurrentLocation(location);
//     })();
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         region={{
//           latitude: currentLocation?.coords.latitude ?? 0,
//           longitude: currentLocation?.coords.longitude ?? 0,
//           latitudeDelta: 0.02,
//           longitudeDelta: 0.02,
//         }}
//         showsUserLocation={true}
//       >
//         <Marker
//           coordinate={{
//             latitude: currentLocation?.coords.latitude ?? 0,
//             longitude: currentLocation?.coords.longitude ?? 0,
//           }}
//           title="Current Location"
//         />
//         <Marker coordinate={destination} title="Kiambu" />
//         <Directions
//           origin={currentLocation}
//           destination={destination}
//           apikey={'s'} // Replace this with your Google Maps API key
//           strokeWidth={3}
//           strokeColor="hotpink"
//         />
//       </MapView>
//     </View>
//   );
// };

// export default DirectionsScreen;
