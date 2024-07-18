import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const references = [
  {
    from: 'Jayant Chhatre',
    referralName: 'Jayant Chhatre',
    details: 'For Calendar supply to Mr. Mahesh Narayishan - Dombivli',
    contact: 'E9821436386\ny.chhatre@gmail.com',
  },
  {
    from: 'Sneha Deshmukh',
    referralName: 'Sneha Deshmukh',
    details: 'For Annual Report printing to Mr. Suresh Patel - Thane',
    contact: 'E9821436387\ns.deshmukh@gmail.com',
  },
  {
    from: 'Rajesh Kumar',
    referralName: 'Rajesh Kumar',
    details: 'For Brochure design to Ms. Priya Singh - Mumbai',
    contact: 'E9821436388\nr.kumar@gmail.com',
  },
  {
    from: 'Amit Shah',
    referralName: 'Amit Shah',
    details: 'For Business cards to Mr. Vikram Verma - Pune',
    contact: 'E9821436389\na.shah@gmail.com',
  },
  {
    from: 'Pooja Mehta',
    referralName: 'Pooja Mehta',
    details: 'For Logo design to Mr. Anil Kapoor - Navi Mumbai',
    contact: 'E9821436390\np.mehta@gmail.com',
  },
  {
    from: 'Ravi Singh',
    referralName: 'Ravi Singh',
    details: 'For Website development to Mr. Karan Gupta - Surat',
    contact: 'E9821436391\nr.singh@gmail.com',
  },
  {
    from: 'Neha Joshi',
    referralName: 'Neha Joshi',
    details: 'For Social Media Marketing to Ms. Ananya Roy - Bangalore',
    contact: 'E9821436392\nn.joshi@gmail.com',
  },
  {
    from: 'Vikas Pandey',
    referralName: 'Vikas Pandey',
    details: 'For Mobile App development to Mr. Arjun Reddy - Hyderabad',
    contact: 'E9821436393\nv.pandey@gmail.com',
  },
  {
    from: 'Anita Desai',
    referralName: 'Anita Desai',
    details: 'For SEO services to Mr. Ramesh Sharma - Delhi',
    contact: 'E9821436394\na.desai@gmail.com',
  },
  {
    from: 'Manoj Tiwari',
    referralName: 'Manoj Tiwari',
    details: 'For Content Writing to Ms. Shalini Singh - Kolkata',
    contact: 'E9821436395\nm.tiwari@gmail.com',
  },
  {
    from: 'Sunil Patil',
    referralName: 'Sunil Patil',
    details: 'For Email Marketing to Mr. Raj Malhotra - Chennai',
    contact: 'E9821436396\ns.patil@gmail.com',
  },
  {
    from: 'Kavita Nair',
    referralName: 'Kavita Nair',
    details: 'For Graphic Design to Ms. Swati Das - Coimbatore',
    contact: 'E9821436397\nk.nair@gmail.com',
  },
  {
    from: 'Ashok Mehta',
    referralName: 'Ashok Mehta',
    details: 'For Corporate Training to Mr. Anupam Kher - Jaipur',
    contact: 'E9821436398\na.mehta@gmail.com',
  }
];

const MyComponent: React.FC = () => {
  const [reference, setReference] = React.useState<string>('');
  const [date, setDate] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('');
  const [member, setMember] = React.useState<string>('');
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header2}>
        <TouchableOpacity onPress={() => router.navigate('/(tabs)/home')} style={styles.iconButton}>
          <EvilIcons name="close" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={[styles.input, styles.flex1]}
            placeholder="Reference"
            value={reference}
            onChangeText={setReference}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
          <TextInput
            style={[styles.input, styles.flex1]}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={[styles.input, styles.flex1]}
            placeholder="Member"
            value={member}
            onChangeText={setMember}
          />
          <Button title="Search" color="#1E90FF" onPress={() => {}} />
          <Button title="Add" color="#FF4500" onPress={() => {}} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Clear" color="#B0B0B0" onPress={() => {}} />
          <Button title="Search" color="#1E90FF" onPress={() => {}} />
        </View>
      </View>

      <View>
        <Text style={styles.sectionTitle}>References Received</Text>
        <View style={styles.gridContainer}>
          {references.map((ref, index) => (
            <View key={index} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image
                  source={{ uri: 'https://placehold.co/50x50' }}
                  style={styles.cardImage}
                />
                <View>
                  <Text style={styles.cardTitle}>From: {ref.from}</Text>
                  <Text style={styles.cardSubtitle}>Referral Name: {ref.referralName}</Text>
                </View>
              </View>
              <Text style={styles.cardContent}>{ref.details}</Text>
              <Text style={styles.cardFooter}>{ref.contact}</Text>
              <Button title="Take Action" color="#1E90FF" onPress={() => {}} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  searchContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 24,
  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  iconButton: {
    padding: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    padding: 8,
    margin: 4,
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 16,
    flexBasis: width > 768 ? '48%' : '100%',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  cardContent: {
    fontSize: 14,
    marginBottom: 16,
  },
  cardFooter: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
});

export default MyComponent;
