import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, PanResponder } from 'react-native';

class HamburgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      animatedValue: new Animated.Value(0),
      panResponder: PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: this.handlePanResponderMove,
        onPanResponderRelease: this.handlePanResponderRelease,
      }),
    };
  }

  handlePanResponderMove = (_, gestureState) => {
    const { dx } = gestureState;
    if (dx < -50) {
      // If swiped leftwards by a certain threshold, close the menu
      this.closeMenu();
    } else if (dx > 50) {
      // If swiped rightwards by a certain threshold, open the menu
      this.openMenu();
    }
  };

  handlePanResponderRelease = () => {
    // You can add additional handling here if needed
  };

  openMenu = () => {
    this.setState({ isOpen: true });
    Animated.timing(this.state.animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  toggleMenu = () => {
    if (this.state.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  render() {
    const rotate = this.state.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg'],
    });

    return (
      <View style={styles.container}>
        <View {...this.state.panResponder.panHandlers} style={styles.menuButton}>
          <Animated.Text style={[styles.menuText, { transform: [{ rotate }] }]}>
            &#9776;
          </Animated.Text>
        </View>
        {this.state.isOpen && (
          <View style={styles.menuItems}>
            <View style={styles.profileSection}>
              <Image
                source={require('./assets/icon.png')} // Replace with your profile icon
                style={styles.profileIcon}
              />
              <Text style={styles.profileText}>John Doe</Text>
            </View>
            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    padding: 10,
    width: '90%',
    height: '100%',
  },
  menuButton: {
    padding: 10,
    zIndex: 2,
  },
  menuText: {
    fontSize: 24,
  },
  menuItems: {
    position: 'absolute',
    backgroundColor: 'lightgrey',
    padding: 10,
    left: 0,
    top: 0,
    zIndex: 1,
    width: '90%',
    height: '100%',
    borderRadius: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // To make it a circle
  },
  profileText: {
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: 'red', // Change the background color as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
  },
});

export default HamburgerMenu;
