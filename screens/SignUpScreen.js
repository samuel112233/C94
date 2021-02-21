
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import {Input,Icon} from 'react-native-elements';
import firebase from 'firebase';


export default class SignUpScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:' ',
      password:' ',
      confirmPassword:' '
    }
  }
  userSignUp=(email,password,confirmPassword)=>{
    if(password!==confirmPassword){
      return Alert.alert('The Password does not match ')
    }
    else{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(response=>{
        return Alert.alert('Account Created Successfully')
      })
      .catch(error=>{
        var errorCode = error.code
        var errorMessage = error.message
        return Alert.alert(errorMessage)
      })
    }
  }
  render(){
    return(
     <View style={styles.container}>
       <Input
       theme={{colors:{primary:'#000000'}}}
       label={'Enter Email Id'}
       placeholder={'Enter Email Id'}
       placeholderTextColor={'grey'}
       leftIcon={{
         type:'MaterialIcons',
         name:'person',
         color:'black',
         size:24
       }}
       onChangeText={(text)=>{
         this.setState({
          email:text
         })
       }}/>

      <Input
       theme={{colors:{primary:'#000000'}}}
       label={'Enter Password'}
       placeholder={'Enter Password'}
       placeholderTextColor={'grey'}
       leftIcon={{
         type:'MaterialIcons',
         name:'person',
         color:'black',
         size:24
       }}
       onChangeText={(text)=>{
         this.setState({
          password:text
         })
       }}/>

      <Input
       theme={{colors:{primary:'#000000'}}}
       label={'Confirm Password'}
       placeholder={'Confirm Password'}
       placeholderTextColor={'grey'}
       leftIcon={{
         type:'MaterialIcons',
         name:'person',
         color:'black',
         size:24
       }}
       onChangeText={(text)=>{
         this.setState({
          confirmPassword:text
         })
       }}/>
       <TouchableOpacity onPress={()=>{
         this.userSignUp(this.state.email,this.state.password,this.state.confirmPassword)
         this.props.navigation.navigate('Login')
       }}>
         <Text>Create Account</Text>
       </TouchableOpacity>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
