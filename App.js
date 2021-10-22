import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import { Avatar } from 'react-native-elements';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Image, TouchableOpacity, TouchableHighlight, RefreshControl, FlatList, SafeAreaView, StyleSheet, Text, View, ViewBase } from 'react-native';



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
    <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <View style={{marginTop:"150px"}}> 
      <Image source={{ uri: mediumPhoto}}  style={{ height: 250,
    width: 250,
    borderRadius: 125,
    overflow:"hidden",
    marginBottom:"-20px"

    
    }} />
    </View>
      
      <View style={{marginBottom:"100px",borderRadius:10,backgroundColor:"white", height:"60%" ,width:"80%",zIndex:-5,borderWidth: 1,
borderColor: "#ddd",
borderBottomWidth: 0,
shadowColor: "#000",
shadowOffset: {width: 0, height: 2},
shadowOpacity: 0.8,
shadowRadius: 2,}}> 
      
      
      <View style={{margin:"10px",marginTop:"50px",alignItems: 'center', justifyContent: 'center'}} > 
      <Text style={{fontSize:30,fontWeight:"bold"}} >{nameAndSurname}</Text>
      <Text style={{margin:"10px", color:"grey"}}>{email}</Text>
      <Text> {phone}</Text>
      <Text> {new Date(birthDay).toLocaleDateString()}</Text>
      </View>
      <View style={{ margin:"10px",flexDirection:"row",alignItems: 'center', justifyContent: 'center'}}>
      <Icon name={"logo-facebook"} size={35} color="#4267B2" padding={"20px"}/>
      <Icon name={"logo-instagram"} size={35} color="purple" />
      <Icon2 name={"world-o"} size={35} color="black" />
      <Icon name={"logo-linkedin"} size={35} color="#0e76a8" />
      <Icon name={"logo-twitter"} size={35} color="#1DA1F2" />
      </View>
      </View>
      
    
    </View>
  );
}


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer >
    <Stack.Navigator >
      <Stack.Screen  name="Random Users" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  );
}



