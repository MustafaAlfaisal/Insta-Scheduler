import React from 'react'
import {Box,Text} from 'react-native-design-utility'
import {TouchableOpacity,Image,Animated} from 'react-native'
import { imgs } from './src/constant/img';
import {FontAwesome} from '@expo/vector-icons'
import { theme } from './src/constant/theme';

const bgcolor =type =>{
    switch(type){
        case 'google':
        return '#242424'
        case 'facebook':
        return '#9e9e9e'
default:
return 'white'

    }
}

const Loginsbutton =({children ,type,onPress})=>(
<TouchableOpacity onPress={onPress}>
<Box  dir="row" align="center" shadow={1} bg={bgcolor(type)} w="80%" self="center" p="2xs" mb="sm" radius="xs">
<Box mr="sm">
<Box bg="white" w={30} h={30} radius="xs" center style={{position:'relative'}}>



{type=='google'&& <Image source={imgs.google}/>}

{type=='facebook'&& (<FontAwesome name="facebook" color={theme.color.blueDark} size={30} style={{position:'absolute',right:5,bottom:-3}}/>)}
</Box>
</Box>
<Box>
<Text color="white" size="md">

    {children}
</Text>

</Box>


</Box>


</TouchableOpacity>
)
export default Loginsbutton;