import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './screens/Home';
import {DetailsScreen} from './screens/Detail';
import { RefreshControl, FlatList, SafeAreaView, StyleSheet, Text, View, ViewBase } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {

    
   

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}


