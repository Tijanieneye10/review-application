import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, Button } from 'react-native'
import List from './List'
import Footer from './Footer'
import BottomNav from  '../Components/BottomNav'



export default function Home({ navigation }){
    return (
        <>
        <SafeAreaView>
            <List />
            <BottomNav  navigation={navigation}/>
        </SafeAreaView>
            <Footer navigation={navigation}  />
            </>
    ) 
}

const styles = StyleSheet.create({
    container:{
       alignSelf: 'center',
       paddingBottom: 10,
       paddingTop: 10,
       borderWidth: 1,
       borderRadius: 10,
       backgroundColor: 'yellow',
       marginTop: 5,
       marginBottom: 5
    },
    textProp:{
        fontSize: 16,
        paddingLeft: 5,
        paddingRight: 5,
    }
})