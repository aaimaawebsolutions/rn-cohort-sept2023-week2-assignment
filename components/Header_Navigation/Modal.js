import React, { useState } from "react";
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";
import HeaderAction from "./HeaderAction"; // Import your HeaderAction component

const ModalComponent = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>

      {/* Use the HeaderAction component with onPress to show the modal */}
      <HeaderAction icon="plus" onPress={showModal} />

      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};

export default ModalComponent;
