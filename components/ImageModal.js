import React from "react";
import { View, Image } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";

function ImageModal({
  title,
  description,
  imageUrl,
  visible,
  onClose,
  onEdit,
}) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            source={{ uri: imageUrl }}
            style={{ width: 300, height: 300 }}
          />
          <Text variant="headline">{title}</Text>
          <Text>{description}</Text>
          <Button mode="contained" onPress={onEdit}>
            Edit Description
          </Button>
          <Button mode="outlined" onPress={onClose}>
            Close
          </Button>
        </View>
      </Modal>
    </Portal>
  );
}

export default ImageModal;
