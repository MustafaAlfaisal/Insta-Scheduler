import {Facebook,Constants} from 'expo'



const permission =['public_profile','email']
const loginasyn=async()=>{


    
const {type,token}=await Facebook.logInWithReadPermissionsAsync("358477158294868",{permission})
if(type=='success'){
console.log("token",token);

    return Promise.resolve(token)

}
return Promise.reject('no suc')
   

    }



export const FacebookApi ={
loginasyn

}