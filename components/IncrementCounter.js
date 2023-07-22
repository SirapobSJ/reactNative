import {Text, View, Button } from 'react-native'
import React, { useState } from 'react'

const IncrementCounter = () => {

    const [age, setAge]= useState(23)

    const increment = () => {
        setAge(a => a+3);
    }

  return (
    <View>
        <Text style={{fontSize:24,fontstyle:'bold'}}>
            Your age: {age}
        </Text>
        <Text>{'\n\n'}</Text>
        <Button
            title = '+3'
            onPress = {(age) => increment(age)}
        />
        <Text>{'\n\n'}</Text>
        <Button
            title = '+1'
            onPress = {() => setAge(age+1)}
        />
    </View>
  )
}

export default IncrementCounter