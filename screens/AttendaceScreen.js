import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const AttendaceScreen = ({ navigate }) => {
    const handleLogin = () => {
        navigate('Home')
    }
  return (
    <View>
      <Text>AttendaceScreen</Text>
      <Button title="Home" onPress={handleLogin} />
    </View>
  )
}

export default AttendaceScreen

const styles = StyleSheet.create({})