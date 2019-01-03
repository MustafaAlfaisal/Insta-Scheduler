import React,{Component} from 'react'
import {Box,Text} from 'react-native-design-utility'
import {Image} from 'react-native'
import {imgs} from '../constant/img'
import Onbordinglogi from '../../commens/Onbordinglogi';
export default class Splash extends Component {
    state ={

    }


componentDidMount(){

  this.checkauth()
}
checkauth=()=>{
  this.props.navigation.navigate('Auth')
  setTimeout(()=>{
   


this.props.navigation.navigate('Auth')

  },2000)
}

    render() {
      return (
          <Box f={1} center>

<Onbordinglogi/>
          </Box>
      );
    }
  }
  
  
  
  
  
  