import React from 'react';
import { StyleSheet, Text, View ,Platform,StatusBar,Button,Image} from 'react-native'
import {createStackNavigator,TabNavigator} from 'react-navigation'

export default class SecoundScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>sec screen</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
