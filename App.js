import React from 'react'
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList} from 'react-native'
import BookCount from './components/BookCount'
import {Ionicons} from '@expo/vector-icons'

export default class App extends React.Component{

  constructor(){
    super()

    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: '',
      books: [], 
 
    }
  }

  showAddNewBook = () => {

    this.setState({
      isAddNewBookVisible: true
    })

  }

  hideAddNewBook = () => {
    this.setState({
      isAddNewBookVisible: false
    })
  }


  
handleSave = () => {

  const {textInputData} = this.state

  if(textInputData !== ''){
    this.setState((prevState, props) => ({

      books: [...prevState.books, textInputData],
      totalCount: prevState.totalCount + 1,
      readingCount: prevState.readingCount + 1,
      textInputData: '',
      isAddNewBookVisible: false
      
  
    }), () => {console.log(this.state.books)})
  }else{
    alert('YOU DID NOT WRITE A BOOK')
  }
  

}

markAsRead = (selectedBook, index) =>  {
  let newList = this.state.books.filter(book => book !== selectedBook)

  this.setState((prevState) => ({
    books: newList,
    readingCount: prevState.readingCount -1,
    readCount: prevState.readCount + 1,
    totalCount: prevState.totalCount -1
  }))
}



renderItem = (item, index) =>(
  <View style={{height: 50, flexDirection: 'row'}}>
    <View style={{flex: 1, justifyContent: 'center', paddingLeft: 5}}>
      <Text style={{fontSize: 20}}>{item}</Text>
    </View>
    <TouchableOpacity onPress={() => this.markAsRead(item, index)}>
      <View style={{
        width: 100,
        height: 50,
        backgroundColor: '#2d97e3',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Mark as Read</Text>
      </View>
    </TouchableOpacity>
  </View>
)
    

  render(){
    
    return(
      
      <View style={styles.container}>        
        <SafeAreaView  />

        {/*HEADER*/}
        <View style={{    
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 0.5,
            borderBottomColor: '#cad9da'
            }}>
           <Text style={{fontSize: 30, color: '#70a9da'}}>Book Worm</Text>  
        </View>
               
        
        {/*CONTENT*/}
        <View style={{flex: 1, backgroundColor: '#a0d0d6'}}> 

          {/*TEXT INPUT*/}

          { this.state.isAddNewBookVisible && (
          
          <View style={{height: 50, flexDirection: 'row'}}>

            <TextInput
              style={{flex: 1, backgroundColor: '#ccd2d4', paddingLeft: 5, fontSize: 20}}
              onChangeText={(text) => this.setState({textInputData: text})}
              placeholder= 'Enter Book Name'
              placeholderTextColor= 'grey'              
            />

            {/* ICONOS*/}
            <TouchableOpacity onPress={this.handleSave}>
              <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#96e08d',
                alignItems: 'center',
                justifyContent: 'center'}}>
                <Ionicons name='ios-checkmark' color='white' size={40}/>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.hideAddNewBook}>
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
          )}
          
          <FlatList 
            data={this.state.books}
            renderItem={({item}, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent ={
              <View style={{marginTop: 50, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>Not Reading Any Book.</Text>
              </View>
            } />

          {/*BUTTON*/}
          <TouchableOpacity 
            style={{position: 'absolute', right: 20, bottom: 20}}
            onPress={this.showAddNewBook}> 
            <View style={{
              height: 50,
              width: 50,
              borderRadius: 25,
              backgroundColor: '#f7588d',
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