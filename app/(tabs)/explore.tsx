import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import 'nativewind';
// import { styled } from 'nativewind';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, TouchableOpacity, Image, Linking, ScrollView, StyleSheet, Text, View } from 'react-native';

// const StyledView = styled(View);
// const StyledText = styled(Text);

export default function TabTwoScreen() {

  const [References, setReferences]: any = useState([]);
  const [Message, setMessage] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarAnim = useRef(new Animated.Value(-1000)).current;

  const username = 'amar@sanmisha.com';
  const password = 'amar123@';


  const fetchReferences = async () => {
    try {

      const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");
      const authString = btoa(`${username}:${password}`);
      console.log(authString);
      myHeaders.append("Authorization", `Basic ${authString}`);

      const response = await fetch(`https://bbmoapp.bbnglobal.net/api/references`, {
        method: 'GET',
        headers: myHeaders,
        redirect: "follow"
      });

      const data = await response.json();

      console.log(data);
      console.log(myHeaders)

      if (response.status === 200) {
        setMessage('It Worked!!!');
        console.log(data);
        setReferences(data.references);
      } else {
        setMessage('It do not Worked!!!');
        setReferences([]);
      }
    } catch (e: any) {
      console.error('JSON parse error Help', e);
    }
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar),
      Animated.timing(sidebarAnim, {
        toValue: showSidebar ? -1000 : 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
  };

  const openExternalLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening external link:', err));
  };

  useEffect(() => {
    fetchReferences();
  }, [])

  return (
    <View className='flex-1 relative top-[30px] bg-gray-200'>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.iconButton}>
          <EvilIcons name="navicon" size={50} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openExternalLink('https://github.com/itzblacckk')}>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/profile.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View className='p-4 flex-1 mb-8'>
        <ScrollView className='w-full p-2'>
          {References.map((reference: any, index: any) => (
            <View key={index} className='w-full bg-white h-auto p-4 text-gray-500 my-2 rounded-lg'>
              <Text className='text-xl font-bold text-gray-600'>To : {reference.Reference.to_whom}</Text>
              <View>
                <Text
                  className='text-lg py-2'
                >
                  Referral Name : {reference.Reference.name_of_referral} ,
                </Text>
                <View className='w-full inline-flex flex-row justify-start items-center'>
                  <Text
                    className='bg-teal-400 text-white p-1'
                  >
                    {reference.Reference.date}
                  </Text>
                  <Text
                    className={`font-bold inline-block p-1 ${reference.Reference.status === 'Business Done' ? 'bg-green-400 text-white' : 'bg-gray-400 text-white'}`}
                  >
                    {reference.Reference.status}
                  </Text>
                </View>
                {
                  reference.ReferenceTrack[0].comment === ''
                    ? [] :
                    <Text
                      className='text-black my-2 text-xl'
                    >
                      "
                      {reference.ReferenceTrack[0].comment}
                      "
                    </Text>
                }
                <Text className='my-2'>
                  {reference.Reference.address_line_1}
                </Text>
                <View className='inline-flex flex-row items-center gap-4 py-2'>
                  <FontAwesome name='paper-plane-o' size={20} color="gray" />
                  <Text className='text-lg text-gray-500'>
                    {reference.Reference.email}
                  </Text>
                </View>
                <View className='w-full justify-center items-center'>
                  <View className='w-full flex-row justify-center items-center gap-4 my-2'>
                    <TouchableOpacity className='w-[33%] bg-blue-500 p-2 text-center rounded-md'>
                      <Text className='text-white text-center'>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-[33%] bg-red-500 p-2 text-center rounded-md'>
                      <Text className='text-white text-center'>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity className='w-full bg-teal-500 p-2 text-center rounded-md'>
                    <Text className='text-white text-center'>Add Testimonial</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
