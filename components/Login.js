import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'

const Login = () => {
    
    const[textInputName,setTextInputName] = useState('')
    const[textInputEmail,setTextInputEmail] = useState('')

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        //Check Successfully
         if (textInputName.trim() && textInputEmail.trim()) {
            alert('Success');
            return;
        }
    }
    
  return (
    <View style={styles.container}>
        <TextInput
            placeholder='Enter Name'
            style = {styles.textInputStyle}
            value = {textInputName}
            onChangeText = {(value) => {setTextInputName(value)}}
        />
        <Text>{'\n'}</Text>
        <TextInput
            placeholder='Enter Email'
            style = {styles.textInputStyle}
            value = {textInputEmail}
            onChangeText = {(value) => {setTextInputEmail(value)}}
        />
        <Text>{'\n'}</Text>
        <Button 
        title='SUMMIT'
        onPress={(textInputName,textInputEmail) => checkTextInput(textInputName,textInputEmail)}
        />
    </View>
  )
}

export default Login

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