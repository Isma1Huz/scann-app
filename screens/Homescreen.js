import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Homescreen = ({navigate}) => {
    const handleLogin = async () => {
        // Your login logic here...
    
        // After successful login, navigate to the Home screen
        navigate('Scan');
      };
    
  return (
    <View>
      <Text>Homescreen</Text>
      <Button title="Login" onPress={handleLogin} />

    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({})








