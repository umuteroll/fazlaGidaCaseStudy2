import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { FlatList, SafeAreaView, StyleSheet, Text, View, ViewBase } from 'react-native';

export default function App() {
  
    const [contacts, setContacts] = useState([])
    useEffect( () => {
      fetch('https://randomuser.me/api/?results=10')
      .then(resp => resp.json())
      .then(resp => setContacts(resp.results))


    }, [])
    
   console.log(contacts)

  return (
    <View style={styles.container}>
      <SafeAreaView style={{
        backgroundColor: "#d73963",
        width: "100%",
        height: "50px"
      }}>

        <Text
          style={{
            fontSize: 20,
            margin: "15px",
            color: "#ffff",
            fontFamily: "sans-serif"


          }}>
          Random Users</Text>
      </SafeAreaView>

      <FlatList
        data={contacts}
        style={{margin:"10px"}}
        renderItem={({ item }) => 
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
        }
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
