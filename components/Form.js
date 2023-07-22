import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Form = () => {
    
    const [name, setName] = useState('Taylor')
    const [age, setAge] = useState(42)

  return (
    <View style={styles.container}>
      <TextInput
            placeholder='Enter Text'
            style = {styles.textInputStyle}
            value = {name}
        />
        <Text>{'\n\n'}</Text>
        <Button 
        title='INCREMENT AGE'
        onPress={() => {setAge(age+1)}}
        />
        <Text>{'\n\n'}Hello,{name}. You are {age}.</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 35,
    },
    textInputStyle: {
        width: '100px',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
})