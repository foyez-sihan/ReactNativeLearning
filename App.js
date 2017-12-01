import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Clock from './Clock'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{flex:1, backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center'}} >
        <Clock/>
        </View>
        <View style={{flex:2, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
        <Clock/>
        <View style={{backgroundColor: 'lightgray', justifyContent:'center', height: 32, width: 122, alignItems:'center'}}>
          <TextInput placeholder="he" style={{height: 30, width: 120,backgroundColor:'white', paddingLeft: 10 }}/>
        </View>
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  text: {
    color: '#ff0000'
  }
});
