import React, {useState } from 'react'
import {View, StyleSheet, SafeAreaView, Button, 
    TouchableWithoutFeedback, Keyboard, Alert, Text} from 'react-native'
import { TextInput } from 'react-native-paper'
import Footer from './Footer'
import AsyncStorage from '@react-native-community/async-storage';


export default function Details({ navigation }){
    const [titleMan, setTitleMan] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const note = { title, desc}
    
    const storeData = async (note) => {
        try {
          const jsonValue = JSON.stringify(note)
          await AsyncStorage.setItem('storage', jsonValue)
          Alert.alert('saved')
        } catch (e) {
          // saving error
        }
      }

      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
         jsonValue != null ? JSON.parse(jsonValue) : null;
         setTitleMan(jsonValue)
        } catch(e) {
          // error reading value
        }
      }
      
      
    return (
        <>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
            <View style={styles.main}>
            <TextInput
                label="Note Title"
                value={title}
                mode='flat'
                 onChangeText={(value)=> setTitle(value)}
          />
            <TextInput
                 multiline
                label="Note Description"
                value={desc}
                mode='flat'
                 onChangeText={(value) => setDesc(value)}
                 style={styles.desc}
          />
          <Button 
            title="Save Note"
            color="#041f3a"
            onPress= {storeData, getData}
          />
          <Text>{titleMan}</Text>
            </View>
        </SafeAreaView>
          </TouchableWithoutFeedback>
          <Footer navigation={navigation}  />
          </>
    )
}

const styles = StyleSheet.create({
    main:{
        margin: 20,
    },
    desc:{
        marginTop: 15,
        marginBottom: 20,
        height: 150,
    }
})