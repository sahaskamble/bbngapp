import * as React from "react";
import { Text, View, ScrollView, TouchableOpacity, Alert, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import 'nativewind';
import { FontAwesome } from "@expo/vector-icons";
import AnimatedNavbar from "@/components/AnimatedNavbar";


interface Member {
  id: string;
  name: string;
  profile_pic: string | null;
  organization_name: string;
  business_tagline: string;
  organization_description: string;
}

const Profile: React.FC = () => {
  const [userData, setUserData] = React.useState<Member | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem('userData');
      if (storedUserData !== null) {
        const parsedUserData: Member = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
    } catch (error) {
      console.error('Failed to load user data', error);
    }
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

  if (!userData) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-200">
        <Text className="text-xl text-gray-500">Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <View className="flex-1 relative top-[30px] bg-gray-200">
        <AnimatedNavbar />
        <View className="flex-1 justify-evenly">
          <View className="flex items-center">
            {userData.profile_pic ? (
              <Image
                style={{ width: 80, height: 80 }}
                source={{ uri: userData.profile_pic }}
              />
            ) : (
              <FontAwesome name="user-o" size={50} className="border-red-600 border-2" />
            )}
            <Text className="text-3xl font-bold">{userData.name}</Text>
          </View>
          <View className="flex gap-6 items-center h-1/2">
            <Text className="text-xl italic">&quot;{` ${userData.business_tagline} `}&quot;</Text>
            <Text className="text-xl font-semibold">{userData.organization_name}</Text>
            <Text className="text-lg p-4 text-center">{userData.organization_description}</Text>
          </View>
          <TouchableOpacity onPress={handleLogout} className="w-[90%] mx-auto mb-10 px-4 p-2 bg-[#5bc0de] rounded-lg inline-flex items-center">
            <Text className="text-xl">Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;
