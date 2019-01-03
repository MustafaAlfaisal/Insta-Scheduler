import {DrawerNavigator,StackNavigator,SwitchNavigator,TabNavigator} from 'react-navigation'
import React,{Component} from 'react'
const AuthNavigator = StackNavigator({
Login :{
getScreen:()=> require('./login').default
},

},
{

    navigationOptions:{
        header:null
    }
});
const TapNavigator2 = TabNavigator({
    Home :{
        getScreen:()=> require('./Home').default
        },


})


const MainNavigator = StackNavigator({

    Tab:TapNavigator2,
});

const AppNavigator = SwitchNavigator({
    Splash :{
        getScreen:()=> require('./Splash').default
        },
        Auth:AuthNavigator,
       Main: MainNavigator,
    },
        {
initialRouteName:'Splash'

        },
)



export default class Navigation extends Component{
state ={};
render(){
return(
<AppNavigator/>

)


}

}