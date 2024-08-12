import { View, TouchableOpacity, Image, ScrollView, Animated, Easing, Alert, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react'
import { useRouter } from 'expo-router';
import { Text } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AnimatedNavbar() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMessagesDropdown, setShowMessagesDropdown] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  const sidebarAnim = useRef(new Animated.Value(-1000)).current;

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar),
      Animated.timing(sidebarAnim, {
        toValue: showSidebar ? -1000 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMessagesDropdown = () => {
    setShowMessagesDropdown(!showMessagesDropdown);
  };

  const toggleAuthDropdown = () => {
    setShowAuthDropdown(!showAuthDropdown);
  };
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Logged Out', 'You have been successfully logged out.');
      router.navigate('/login');
    } catch (error) {
      console.error('Failed to clear AsyncStorage', error);
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.iconButton}>
          <EvilIcons name="navicon" size={50} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{ router.navigate('(tabs)/profile') } }>
          <Image
            style={styles.profileImage}
            source={require('./images/profile.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.sidebar, { left: sidebarAnim, backgroundColor: '#5bc0de' }]}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
          <EvilIcons name="close" size={40} color="#ffffff" />
        </TouchableOpacity>
        <Image
          style={styles.sidebarImage}
          source={require('./images/logo.png')}
        />
        <ScrollView>
          <TouchableOpacity onPress={() => router.navigate('(tabs)/home')}>
            <Text style={styles.sidebarItem}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownToggle}>
            <Text style={styles.sidebarItem}>References</Text>
            <EvilIcons name={showDropdown ? "chevron-up" : "chevron-down"} size={24} color="#000" />
          </TouchableOpacity>
          {showDropdown && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() =>{ toggleSidebar(); router.navigate('/(tabs)/givenewreference')}}>
                <Text style={styles.dropdownItem}>Give New Reference</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{ toggleSidebar(); router.navigate('/(tabs)/explore')}}>
                <Text style={styles.dropdownItem}>Given Reference</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>{ toggleSidebar(); router.navigate('/(tabs)/Received_reference')}} >
                <Text style={styles.dropdownItem}>Received Reference</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity >
            <Text style={styles.sidebarItem}>Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.sidebarItem}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} >
            <Text style={styles.sidebarItem}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </>
  )
}   

const styles = StyleSheet.create({
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    backgroundColor: '#5bc0de',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius: 25,
  },
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 50
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    width: '80%',
    backgroundColor: '#5bc0de',
    padding: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  sidebarItem: {
    fontSize: 18,
    marginBottom: 10,
    padding: 10,
  },
  sidebarImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
  },
  dropdownToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    color: '#1a73e8',
  },
  dropdown: {
    marginVertical: 10,
    paddingLeft: 20,
  },
  dropdownItem: {
    fontSize: 16,
    paddingVertical: 5,
  },
});
