import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import numeral from 'numeral';
export default class Clock extends React.Component {
    
    state = {date: new Date()};
    
    componentWillUnmount = () => {
        clearInterval(this.timer)
    }
    componentDidMount = () => {
        this.timer = setInterval(this.updateDate, 1000)   
    }
    updateDate = () => {
        this.setState({date: new Date()})
    }

  render() {
    const date = this.state.date
    const hh =  numeral(date.getHours()).format('00');
    const mm = numeral(date.getMinutes()).format('00');
    const ss = numeral(date.getSeconds()).format('00');
    return (
        <View>
        <Text style={styles.clock}>{hh}:{mm}:{ss}</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    clock: {
        color: '#ff0000',
        fontSize:44,
        fontWeight:'bold'

    }
  });