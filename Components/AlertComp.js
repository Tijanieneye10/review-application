import React from 'react'
import { Alert } from 'react-native'

const AlertComp = () =>
Alert.alert(
  "About Us",
  "Brainyworld Technology is into Mobile application development, websites and robust softwares",
  [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel"
    },
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false }
);
export default AlertComp
