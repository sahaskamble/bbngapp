import AnimatedNavbar from '@/components/AnimatedNavbar';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'nativewind';
import { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView, Text, View } from 'react-native';

export default function TabTwoScreen() {

  const [References, setReferences]: any = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const username = AsyncStorage.getItem('username');
  const password = AsyncStorage.getItem('password');


  const fetchReferences = async () => {
    try {
      setisLoading(true);
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      const authString = btoa(`${username}:${password}`);
      myHeaders.append("Authorization", `Basic ${authString}`);

      const response = await fetch(`https://bbmoapp.bbnglobal.net/api/references`, {
        method: 'GET',
        headers: myHeaders,
        redirect: "follow"
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        setReferences(data.references);
      } else {
        setReferences([]);
      }
    } catch (e: any) {
      console.error('JSON parse error Help', e);
    } finally {
      setisLoading(false);
    }
  }

  useEffect(() => {
    fetchReferences();
  }, [])

  return (
    <View className='flex-1 relative top-[30px] bg-gray-200'>
      <AnimatedNavbar />
      {
        isLoading ? (
          <View className='flex-1 justify-center items-center'>
            <Text className='text-xl text-gray-500'>Loading...</Text>
          </View>
        ) : (
          <View className='p-4 flex-1 mb-8'>
            <Text onPress={fetchReferences}>Refresh</Text>
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
        )
      }
    </View >
  );
}

