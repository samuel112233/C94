
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Input,Icon} from 'react-native-elements';

export default class SignUpScreen extends React.Component{
  constructor(){
    super()
    this.state={
      email:' ',
      password:' ',
      confirmPassword:' '
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
