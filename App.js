import React from 'react';
import { StyleSheet, View,Platform,StatusBar,ActivityIndicator } from 'react-native';
import {createStackNavigator} from 'react-navigation'
import MainScreen from './componentes/MainScreen'
import Navigation from './src/screen'
import {UtilityThemeProvider,Text,Box} from 'react-native-design-utility'
import {image} from './src/constant/img'
import {cacheimg} from './src/util/cachimh'
import {theme} from './src/constant/theme'

export default class App extends React.Component {
  state ={
    isReady :false
  }
  componentDidMount(){
this.cacheassets()

  }
  cacheassets=async()=>{

    const imgassets=cacheimg(Object.values(image))

await Promise.all(...imgassets)
this.setState({isReady:true})

  }
  render() {
if(this.state.isReady){
return(
  <Box f={1} center bg="white">
<ActivityIndicator size="small"/>


  </Box>
)

}
    return (
      <UtilityThemeProvider > 
<Navigation/>
  </UtilityThemeProvider>
    );
  }
}












