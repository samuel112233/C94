import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class HomeScreen extends React.Component{
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