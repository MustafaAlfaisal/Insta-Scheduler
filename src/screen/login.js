import React,{Component} from 'react'
import {Box,Text} from 'react-native-design-utility'
import Onbordinglogi from '../../commens/Onbordinglogi';
import {TouchableOpacity,Alert,Animated} from 'react-native'
import Loginsbutton from '../../loginsbutton';
import fbsdk,{LoginManager} from 'react-native-fbsdk'
import { FacebookApi } from '../../api/facebook';
import {imgs} from '../constant/img'
import {Image} from 'react-native'
const Boxanmated=Animated.createAnimatedComponent(Box)

export default class Login extends Component {
    state ={
        opacity:new Animated.Value(0),
        possition:new Animated.Value(0)
    };
    componentDidMount(){
        Animated.parallel([this.possitionanm(),this.opacityanm()]).start();
      
    }
    possitionanm=()=>{
        Animated.timing(this.state.possition,{
        toValue:1,
        duration:3000,
        useNativeDriver:true,
        
        }).start()
        
            }

    opacityanm=()=>{
Animated.timing(this.state.opacity,{
toValue:1,
duration:3000,
delay:9000,//1ms

}).start()

    }
Ongooglepress=()=>{

Alert.alert('google')

}
Onfacepress=async()=>{
   
    const token=FacebookApi.loginasyn()

    console.log("token",token);


 //Alert.alert('face')
    
    }
    
    render() {
        const{opacity}=this.state;
        const logtranslate= this.state.possition.interpolate({
inputRange:[0,1],
outputRange:[150,0],

        })
      return (
        
          <Box f={1} center bg="white">
    
              <Boxanmated f={1} style={{transform:[{
                  translateY:logtranslate
              }]}}>
          <Onbordinglogi/>
          <Box f={1} center>
      
          </Box>
          </Boxanmated>
          <Boxanmated f={0.9} style={{ width:'100%',opacity}}>
          {/*<Loginsbutton onPress={this.Ongooglepress} type="google">con with google</Loginsbutton>
          <Loginsbutton onPress={this.Onfacepress} type="facebook">con with facebook</Loginsbutton>
            */}
          </Boxanmated>


          </Box>
      );
    }
  }
  
  
  
  
  
  