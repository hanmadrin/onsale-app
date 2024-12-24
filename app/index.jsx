import userDemoData from './userDemoData.js';

import { Text, View, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import Icon from '../assets/icons'; // Ensure you import the Icon component correctly
import { theme } from '../constants/theme';
// import { View, Text, TouchableOpacity } from 'react-native';
// Import your screen components
import CustomerHome from './customer/Home';
import SellerHome from './seller/Home';
import SellerAddPost from './seller/AddPost';
import Search from './customer/Search';
import CustomerProfile from './customer/Profile';
import SellerProfile from './seller/Profile';

// import Icon from '../assets/icons'; // Ensure you import the Icon component correctly

const Tab = createBottomTabNavigator();

export default function Index() {
  // get user_type from .env USER_TYPE
  const [user, setUser] = useState(userDemoData);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Auth') {
            iconName = 'user';
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'AddPost') {
            iconName = 'plus';
          }
          return (
            <Icon
              name={iconName}
              size={26}
              strokeWidth={focused ? 2 : 1.7}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.primaryDark,
        headerShown: false,
        tabBarStyle: {
          height: 50, // Adjust the height here
          paddingBottom: 0, // Optional padding to add space below the icons
          backgroundColor: 'white', // Optional: Customize background color
          justifyContent: 'center',
          alignItems: 'center',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={user?.user_type === "SELLER" ? SellerHome : CustomerHome} 
      />
      {user?.user_type === "SELLER" ? (
        <Tab.Screen name="AddPost" component={SellerAddPost} />
      ) : (
        <Tab.Screen name="Search" component={Search} />
      )}
      <Tab.Screen 
        name="Auth" 
        component={user?.user_type === "SELLER" ? SellerProfile : CustomerProfile} 
      />
    </Tab.Navigator>
  );
}
