import React from 'react'
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import BookCount from './components/BookCount'
import {Ionicons} from '@expo/vector-icons'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0
    }
  }

  render(){
    return(
      
      <View style={styles.container}>        
        <SafeAreaView  />

        {/*HEADER*/}
        <View style={{    
            height: 70,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#cad9da'
            }}>
           <Text style={{fontSize: 30, color: '#70a9da'}}>Book Worm</Text>  
        </View>
               
        
        {/*CONTENT*/}
        <View style={{flex: 1}}> 

          {/*TEXT INPUT*/}
          <View style={{height: 50, flexDirection: 'row'}}>

            <TextInput style={{flex: 1, backgroundColor: '#ccd2d4', paddingLeft: 5, fontSize: 20}}
              placeholder= 'Enter Book Name'
              placeholderTextColor= 'grey'              
            />

            {/* ICONO*/}
            <TouchableOpacity>
              <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#96e08d',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <Ionicons name='ios-checkmark' color='white' size={40}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#e89fa6',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <Ionicons name='ios-close' color='white' size={40}/>
              </View>
            </TouchableOpacity>
          </View>
          
          {/*BOTTON*/}
          <TouchableOpacity style={{position: 'absolute', right: 20, bottom: 20}}> 
            <View style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#85cce4',
              alignItems: 'center',
              justifyContent: 'center'}}>
              <Text style={{color: 'white', fontSize: 30}}>+</Text>
            </View>      
          </TouchableOpacity>   

        </View>

        {/*FOOTER*/}
        <View style={{
          height: 70,
          borderTopWidth: 0.5,
          borderTopColor: '#cad9da',
          flexDirection: 'row',
          
          }}>
          <BookCount title='Total' count={this.state.totalCount}/>
          <BookCount title='Reading' count={this.state.readingCount}/>
          <BookCount title='Read' count={this.state.readCount}/>
          
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