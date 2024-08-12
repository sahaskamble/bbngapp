import { Tabs } from 'expo-router';
import React from 'react';
import AnimatedNav from '@/components/navigation/NavbarAnimated';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle:{
          backgroundColor: "#5bc0de",
          height: 65,
          paddingBottom: 5,
          marginVertical: 10,
          marginHorizontal: 15,
          borderRadius: 25,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <AnimatedNav name="home" focused={ focused } size={35} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'References',
          tabBarIcon: ({ focused }) => (
            <AnimatedNav name="bell" focused={ focused } size={32} />
          ),
        }}
      />
      <Tabs.Screen
        name="givenewreference"
        options={{
          title: 'Give new reference',
          tabBarIcon: ({ focused }) => (
            <AnimatedNav name="plus-square" focused={ focused } size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Received_reference"
        options={{
          title: 'Recived reference',
          tabBarIcon: ({ focused }) => (
            <AnimatedNav name="file-text" focused={ focused } size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <AnimatedNav name="user" focused={ focused } size={33} />
          ),
        }}
      />
    </Tabs>
  );
}
