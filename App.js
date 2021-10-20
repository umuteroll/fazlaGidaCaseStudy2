import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Avatar } from 'react-native-elements';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
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
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        style={{margin:"30px"}}
        renderItem={({ item }) => 
        <View style={{ flexDirection:"row"}}>
        <Avatar
            rounded
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
        <View style={{ minHeight: 70, padding: 5 }}>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 26 }}>
            {item.key + ' '}
            {item.key}
          </Text>
          <Text style={{ color: 'grey', fontWeight: 'bold' }}>
            {item.key}
          </Text>
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
