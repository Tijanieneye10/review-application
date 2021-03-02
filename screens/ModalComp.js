import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

export const ModalComp = () => {
  const [visibleModal, setVisibleModal] = React.useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
  </>
  );
}