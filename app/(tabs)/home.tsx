import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import AnimatedNavbar from '@/components/AnimatedNavbar';

const HomePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <AnimatedNavbar />
      <ScrollView style={styles.container2}>
        {/*
        <View style={styles.header2}>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationButton}>
              <Text style={styles.notificationBadge}>23</Text>
              <Text style={styles.notificationIcon}>🔔</Text>
            </TouchableOpacity>
            <View style={styles.profileCircle}>
              <Text style={styles.profileInitials}>SS</Text>
            </View>
          </View>
        </View>
        */}

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/2024.jpg')}
          />
        </View>

        <Text style={styles.welcomeText}>Welcome Savani Sangwai !!</Text>

        <View style={styles.grid}>
          <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.cardValue}>₹ 4,46,39,449</Text>
            <Text style={styles.cardLabel}>BNI Business Generated</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>431</Text>
            <Text style={styles.cardLabel}>BNI References Shared</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>131</Text>
            <Text style={styles.cardLabel}>BNI Total Visitors</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>372</Text>
            <Text style={styles.cardLabel}>BNI Total One 2 One</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>0</Text>
            <Text style={styles.cardLabel}>References Given</Text>
            <Text style={styles.cardLabel}>Self</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>₹ 17,556</Text>
            <Text style={styles.cardLabel}>Business Given</Text>
            <Text style={styles.cardLabel}>Self</Text>
          </View>
          <View style={[styles.card, styles.greenCard]}>
            <Text style={styles.cardValue}>₹ 1,92,12,066</Text>
            <Text style={styles.cardLabel}>Kalyan Business Generated</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>118</Text>
            <Text style={styles.cardLabel}>Kalyan References Shared</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>16</Text>
            <Text style={styles.cardLabel}>References Received</Text>
            <Text style={styles.cardLabel}>Self</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardValue}>₹ 0</Text>
            <Text style={styles.cardLabel}>Business Received</Text>
            <Text style={styles.cardLabel}>Self</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>0</Text>
            <Text style={styles.cardLabel}>Kalyan Visitors</Text>
          </View>
          <View style={[styles.card, styles.orangeCard]}>
            <Text style={styles.cardValue}>101</Text>
            <Text style={styles.cardLabel}>Kalyan One 2 One</Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Upcoming Meetings</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Messages</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 30,
    flex: 1,
  },
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5bc0de',
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  header2: {
    width: 400,
    overflow: 'scroll',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 8,
  },
  pickerText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    width: 200,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#dc3545',
    color: '#fff',
    borderRadius: 12,
    width: 24,
    height: 24,
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 12,
  },
  notificationIcon: {
    fontSize: 24,
  },
  profileCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  profileInitials: {
    fontSize: 18,
    color: '#555',
  },
  imageContainer: {
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    flex: 1,
    minWidth: '45%',
  },
  greenCard: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  orangeCard: {
    backgroundColor: '#fd7e14',
    color: '#fff',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomePage;
