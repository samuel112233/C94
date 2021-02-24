import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView, Alert, KeyboardAvoidingView, TextInput} from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:' ',
            password:' ',
            modalVisible:false,
            firstName:' ',
            lastName:' ',
            address:' ',
            phoneNumber:' ',
            age:' ',
            covidStatus:' '

        }
    }
    showModalYoung=()=>{
        return(
            <Modal 
            animationType='fade'
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={styles.modalContainer}>
              <ScrollView style={{width:'100%'}}>
               <KeyboardAvoidingView style={styles.keyboardAvoidingStyle}>
                 <Text style={styles.formTitle}>FILL IN YOUR DETAILS</Text>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'email'}
                 onChangeText={(text)=>{
                   this.setState({
                       emailId:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'password'}
                 secureTextEntry={true}
                 onChangeText={(text)=>{
                   this.setState({
                       password:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'firstName'}
                 maxLength={10}
                 onChangeText={(text)=>{
                   this.setState({
                     firstName:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'lastName'}
                 maxLength={10}
                 onChangeText={(text)=>{
                   this.setState({
                       lastName:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'address'}
                 onChangeText={(text)=>{
                   this.setState({
                       address:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'phoneNumber'}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                       phoneNumber:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'age'}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                       age:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'covidStatus'}
                 onChangeText={(text)=>{
                   this.setState({
                    covidStatus:text
                   })
                 }}/>
                 <View style={styles.modalButton}>

                  <TouchableOpacity style={styles.button} onPress={()=>{
                      this.youngDetails()
                  }}>
                      <Text>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}>
                      <Text>Cancel</Text>
                  </TouchableOpacity>

                 </View>
               </KeyboardAvoidingView>
              </ScrollView>
            </View>
            </Modal>
        )
    }

    showModalOld=()=>{
        return(
            <Modal 
            animationType='fade'
            transparent={true}
            visible={this.state.modalVisible}
            >
            <View style={styles.modalContainer}>
              <ScrollView style={{width:'100%'}}>
               <KeyboardAvoidingView style={styles.keyboardAvoidingStyle}>
                 <Text style={styles.formTitle}>FILL IN YOUR DETAILS</Text>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'email'}
                 onChangeText={(text)=>{
                   this.setState({
                       emailId:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'password'}
                 secureTextEntry={true}
                 onChangeText={(text)=>{
                   this.setState({
                       password:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'firstName'}
                 maxLength={10}
                 onChangeText={(text)=>{
                   this.setState({
                     firstName:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'lastName'}
                 maxLength={10}
                 onChangeText={(text)=>{
                   this.setState({
                       lastName:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'address'}
                 onChangeText={(text)=>{
                   this.setState({
                       address:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'phoneNumber'}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                       phoneNumber:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'age'}
                 keyboardType={'numeric'}
                 onChangeText={(text)=>{
                   this.setState({
                       age:text
                   })
                 }}/>
                 <TextInput
                 style={styles.inputBox}
                 placeholder={'covidStatus'}
                 onChangeText={(text)=>{
                   this.setState({
                    covidStatus:text
                   })
                 }}/>
                 <View style={styles.modalButton}>

                  <TouchableOpacity style={styles.button} onPress={()=>{
                      this.oldDetails()
                  }}>
                      <Text>Register</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button}>
                      <Text>Cancel</Text>
                  </TouchableOpacity>

                 </View>
               </KeyboardAvoidingView>
              </ScrollView>
            </View>
            </Modal>
        )
    }
    render(){
        return(
            <View>
              <TouchableOpacity>
                  <Image source={require('../assets/happy_boy.png')}
                  style={{width:40,height:40}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image source={require('../assets/happy_old_man.png')}
                  style={{width:40,height:40}}/>
              </TouchableOpacity>
            </View>
        )
    }
}