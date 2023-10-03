import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';


export default function QRCodeScannerScreen({ navigate }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasLocationPermission, setHasLocationPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await BarCodeScanner.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');

      const locationPermission = await Permissions.askAsync(Permissions.LOCATION);
      setHasLocationPermission(locationPermission.status === 'granted');
    })();
  }, []);
  const navigation = useNavigation()
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    if (!hasLocationPermission) {
      Alert.alert('Location Permission Required', 'Please grant location permission to get accurate location data.');
      return;
    }

    try {
      const locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);

      // Add the following code to display the alert and redirect to the homepage

      Alert.alert('Signed in successfully', `Bar code with type ${type} and data ${data} has been scanned!\nLocation: ${locationData.coords.latitude}, ${locationData.coords.longitude}`, [{ text: 'OK', onPress: () =>{
         navigate('Attendance')
        } }]);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  if (hasCameraPermission === null || hasLocationPermission === null) {
    return <Text>Requesting camera and location permissions...</Text>;
  }
  if (hasCameraPermission === false || hasLocationPermission === false) {
    return <Text>No access to camera or location</Text>;
  }

  return (
    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Text style={styles.scanText}>Scan successful! Tap to scan again.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignContent: 'center',
  //   width: '100%',
  // },
  scanText: {
    fontSize: 18,
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
});
