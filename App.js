import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableOpacity, TouchableHighlight, RefreshControl, FlatList, SafeAreaView, StyleSheet, Text, View, ViewBase } from 'react-native';



function HomeScreen({ navigation }) {
  const [contacts, setContacts] = useState([])
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect( () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(resp => resp.json())
    .then(resp => setContacts(resp.results))


  }, [])
  
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    useEffect( () => {
      fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then(resp => setContacts(resp.results))


    }, [])
  }, [refreshing]);


  return (
    <View >
      

      <FlatList
        data={contacts}
        style={{margin:"10px"}}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => 
        <TouchableHighlight  onPress={() => {
          
          navigation.navigate('Details', {
            nameAndSurname: item.name.first + " " + item.name.last,
            email: item.email,
            phone: item.phone,
            mediumPhoto: item.picture.medium,
            birthDay: item.dob.date,
          });
        }}>
        
  
        <View style={{ flexDirection:"row"}}>
        <Avatar
            rounded
            containerStyle={{ marginTop:"12px", marginRight:"5px"}}
            source={{
              uri:
                item.picture.thumbnail,
            }}
          />
        <View style={{ minHeight: 70, padding: 5 }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
            {item.name.first + ' '}
            {item.name.last }
          </Text>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}>
            {item.email}
          </Text>
        </View>
        <View style={{  flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom:"15px"
        
        }}>
        <Icon name={item.gender+"-outline"} size={25} color="black" />
          </View>
        
        </View>
        </TouchableHighlight>
        }
      />
    </View>
  );
}


function DetailsScreen({ route, navigation }) {
  const { nameAndSurname,email,phone,mediumPhoto,birthDay } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>nameAndSurname: {JSON.stringify(nameAndSurname)}</Text>
      <Text>email: {JSON.stringify(email)}</Text>
      <Text>phone: {JSON.stringify(phone)}</Text>
      <Text>mediumPhoto: {JSON.stringify(mediumPhoto)}</Text>
      <Text>birthDay: {new Date(birthDay).toLocaleDateString()}</Text>
    
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen style={{backgroundColor: "pink"}} name="Random Users" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}


