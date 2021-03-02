import  React, { useState} from 'react';
import { BackHandler, Alert, Text, View } from 'react-native'
import { Appbar, Menu, Divider, useTheme, Modal, Portal} from 'react-native-paper';
import AlertComp from '../Components/AlertComp'


const Header = ({ navigation, previous, title, subtitle }) => {

  // For Alert
 const showAlert = ()=>{
  Alert.alert(
    "Close Application",
    "Do you want to exit",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK", onPress: () => BackHandler.exitApp() }
    ],
    { cancelable: false }
  );
 }

 const showAbout = ()=>{
  Alert.alert(
    "About Us",
    "Brainyworld Technology are into development of Mobile application, web applications and other robust softwares. \n\n Contact us \n Email: brainyworld10@gmail.com \n Phone: 08144161555",
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK" }
    ],
    { cancelable: false }
  );
 }



// Menu
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { colors } = useTheme();

  return (
    <>      
    <Appbar.Header >
      {previous ? <Appbar.BackAction onPress={ navigation.goBack} /> : null }
      <Appbar.Content color="white" title={title} subtitle={subtitle} />
      <Appbar.Action icon="close-box-multiple" onPress={showAlert} />
      <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="dots-vertical" color="white" onPress={openMenu} />
          }
          >
          <Menu.Item onPress={() => { navigation.navigate('Home')}} title="Home Page" />
          <Menu.Item onPress={showAbout} title="About us" />
          <Divider />
          <Menu.Item onPress={() => {navigation.navigate('Details')}} title="Add Note" />
        </Menu>
    </Appbar.Header>
    </>
  );
};

export default Header;