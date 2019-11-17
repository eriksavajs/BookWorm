import React from 'react'
import {View, StyleSheet, Text, SafeAreaView} from 'react-native'

export default class App extends React.Component{

  render(){
    return(
      <View style={styles.container}>
        <SafeAreaView  />
           
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#cad9da'
            }}>
           <Text style={{fontSize: 30, color: '#70a9da'}}>Book Worm</Text>  
        </View>
               
        

        <View style={{flex: 9}}>         
        </View>

        <View style={{
          flex: 1,
          borderTopWidth: 0.5,
          borderTopColor: '#cad9da',
          flexDirection: 'row',
          
          }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Total</Text>
            <Text>0</Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Reading</Text>
            <Text>0</Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'}}>
            <Text style={{fontSize: 20}}>Read</Text>
            <Text>0</Text>
          </View>
        </View>
        <SafeAreaView />
      </View>
    )
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
})