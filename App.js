import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor:"#d73963",
                            width:"100%",
                            height:"50px"
    }}>
      
      <Text
       style={{fontSize:20,
        margin:"15px",
        color: "#ffff",
        fontFamily:"sans-serif"
               
       
       }}>
         Random Users</Text>
      </SafeAreaView>
      
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
