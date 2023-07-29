import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'

const RecapLogin = () => {

    const[textInputEmail,setTextInputEmail] = useState('')
    const[textInputPass,setTextInputPass] = useState('')

    const checkTextInput = () => {
        //Check for the Email TextInput
        if (!textInputEmail.trim()) {
            alert('Please Enter Email');
            return;
        }
        //Check for the Password TextInput
        if (!textInputPass.trim()) {
            alert('Please Enter Password');
            return;
        }
        //Check Successfully
         if (textInputEmail.trim() && textInputPass.trim()) {
            alert('email: ' + textInputEmail +
                '\npassword: ' + textInputPass);
            return;
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Email'
                style = {styles.input}
                value = {textInputEmail}
                onChangeText = {(value) => {setTextInputEmail(value)}}
            />
            <TextInput
                placeholder='Password'
                style = {styles.input}
                value = {textInputPass}
                onChangeText = {(value) => {setTextInputPass(value)}}
            />
            <Text>{'\n'}</Text>
            <Button 
            title='SUMMIT'
            style = {styles.summitButton}
            onPress={(textInputEmail,textInputPass) => checkTextInput(textInputEmail,textInputPass)}
            />
        </View>
      )
    }

export default RecapLogin

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        width: 300,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    summitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: 'white'
    }
})


{/* const alertTextInput = () => {
        alert(
            'email: ' + textInputEmail + 
            '\npassword: ' + textInputPassword
        )
    }

    
return (
        <View style={styles.container}>
        <TextInput
            placeholder = 'Email'
            style = {styles.input}
            value = {textInputEmail}
            onChangeText = {(value) => {setTextInputEmail(value)}}
        />

        <TextInput
            placeholder = 'Password'
            style = {styles.input}
            value = {textInputPassword}
            onChangeText = {(value) => {setTextInputPassword(value)}}
        />
        <Text>{'\n'}</Text>
        <Button
            title='Submit'
            style={styles.submitButton}
            onPress={() => {
                {alertTextInput()}
            }}
        />
        </View>
    )*/}