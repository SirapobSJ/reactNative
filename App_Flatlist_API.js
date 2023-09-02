import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatList_Example1 from './components/FlatList_Example1'
import FlatList_HeaderFooter from './components/FlatList_HeaderFooter'
import FlatListAPI from './components/FlatListAPI'
import News from './components/News'
import ProductScreen from './components/ProductScreen'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <FlatList_Example1/> */}
      {/* <FlatList_HeaderFooter/> */}
      {/* <FlatListAPI/> */}
      {/* <News/> */}
      <ProductScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  },
})