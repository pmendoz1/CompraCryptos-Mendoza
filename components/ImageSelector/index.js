import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImageSelector = (props) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "No Tienes permisos para usar la cámara",
        "Necesitas dar permisos para usar la cámara",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handlerTakeImage = async () => {
    const isCameraOK = await verifyPermissions();
    if (!isCameraOK) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.8,
    });
    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>No hay imagen seleccionada</Text>
        ) : (
          <Image style={styles.image} source={{ uri: pickedUri }} />
        )}
      </View>
      <Button
        title="Tomar Foto de perfil"
        color="#319DA0"
        onPress={handlerTakeImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#293462",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageSelector;
