import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
import { useRouter } from 'expo-router';
import 'nativewind';
import { FontAwesome } from '@expo/vector-icons';

const GiveNewReference = () => {

  const router = useRouter();

  const [date, setDate] = useState('');
  const [noOfReferences, setNoOfReferences] = useState('1');
  const [chapter, setChapter] = useState('');
  const [member, setMember] = useState('');
  const [urgency, setUrgency] = useState('--');
  const [nameOfReferral, setNameOfReferral] = useState('');
  const [mobile1, setMobile1] = useState('');
  const [mobile2, setMobile2] = useState('');
  const [email, setEmail] = useState('');
  const [remarks, setRemarks] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [location, setLocation] = useState('--');
  const [pincode, setPincode] = useState('');

  const sendFormData = async () => {
      const formData = new URLSearchParams();
      formData.append('_method', 'POST');
      formData.append('data[ReferenceDetail][id]', '');
      formData.append('data[ReferenceDetail][date]', '23/07/2024');
      formData.append('data[ReferenceDetail][no_of_references]', '1');
      formData.append('data[Reference][1][chapter_id]', '6');
      formData.append('data[Reference][1][to_whom]', '2329');
      formData.append('data[Reference][1][urgency]', 'Within 1 month');
      formData.append('data[Reference][1][name_of_referral]', 'Devanshu umbarkar');
      formData.append('data[Reference][1][mobile_1]', '1234567890');
      formData.append('data[Reference][1][mobile_2]', '');
      formData.append('data[Reference][1][email]', '');
      formData.append('data[Reference][1][remarks]', '');
      formData.append('data[Reference][1][address_line_1]', '');
      formData.append('data[Reference][1][address_line_2]', '');
      formData.append('data[Reference][1][city_id]', '');
      formData.append('data[Reference][1][pincode]', '');

      try {
        const response = await fetch('https://example.com/api-endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error:', error);
      }
    }; const today = new Date();

  return (
    <View className="bg-gray-200 flex-1 justify-between">
      <View className='mt-10 p-4 inline-flex flex-row items-center'>
        <FontAwesome name='arrow-left' size={25} onPress={() => { router.back() }} />
        <Text className='ml-4 text-lg'>New Reference Form</Text>
      </View>
      <ScrollView className="bg-white h-[80%] w-full px-4 py-4 " scrollToOverflowEnabled={true}>
        <View className="flex gap-4">
          <Text className="text-black text-lg bg-gray-200 border-gray-300 border w-full p-3 mt-7">Refferal Details</Text>
          <View>
            <Text className="text-lg">Date</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300">{`${today.getDate()}-${today.getMonth()}-${today.getFullYear()}`}</TextInput>
          </View>
          <View>
            <Text className="text-lg">Chapter{' '}<Text className="text-red-500">*</Text></Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Member{' '}<Text className="text-red-500">*</Text></Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Urgency</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
        </View>

        <View className="flex gap-4 py-8">
          <Text className="text-black text-lg bg-gray-200 border-gray-300 border w-full p-3 mt-7">Reference</Text>
          <View>
            <Text className="text-lg">Name of Refferal{' '}<Text className="text-red-500">*</Text></Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Mobile 1{' '}<Text className="text-red-500">*</Text></Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Mobile 2</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Email</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" placeholder="example@gmail.com" />
          </View>
          <View>
            <Text className="text-lg">Remarks</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Address Line 1</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Address Line 2</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
          <View>
            <Text className="text-lg">Location</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" placeholder='---' />
          </View>
          <View>
            <Text className="text-lg">Pincode</Text>
            <TextInput className="p-2 text-lg text-black border border-gray-300" />
          </View>
        </View>
        <View className='w-full h-auto my-4 px-4 pb-4 flex flex-row'>
          <TouchableOpacity className="bg-blue-500 p-2 w-[100px] mr-2 inline-flex flex-row justify-center items-center"><Text className='text-lg'>save</Text></TouchableOpacity>
          <TouchableOpacity className="bg-red-500 p-2 w-[100px] inline-flex justify-center items-center"><Text className='text-lg'>cancel</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default GiveNewReference;
