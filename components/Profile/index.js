import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ImageSelector from "../ImageSelector";
import * as FileSystem from "expo-file-system";

const Profile = () => {
  const [image, setImage] = useState("");

  const handleSave = () => {
    return async () => {
      const fileName = image.split("/").pop();
      const Path = FileSystem.documentDirectory + fileName;
      try {
        await FileSystem.moveAsync({
          from: image,
          to: Path,
        });
      } catch (error) {
        console.log(error.message);
        throw error;
      }
    };
  };

  return (
    <LinearGradient
      colors={["#8093f1", "#b388eb", "#ffd6ff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <LinearGradient
        colors={["#bb8588", "#d8a48f"]}
        style={styles.balance}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View>
          <ImageSelector onImage={(image) => console.log(image)} />
          <Button title="Guardar Foto" color="#319DA0" onPress={handleSave} />
          <Text style={styles.title}>
            AQUÍ PONDREMOS DETALLES DEL PERFIL DEL USUARIO
          </Text>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  balance: {
    flexDirection: "column",
    backgroundColor: "#4E6DFF",
    justifyContent: "space-evenly",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 30,
    marginTop: "10%",
    marginBottom: "10%",
    width: "100%",
    minHeight: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    color: "#FBFEFF",
    fontSize: 20,
    marginLeft: 20,
    fontFamily: "LatoRegular",
  },
  screen: {
    marginTop: "10%",
    padding: 5,
    paddingBottom: 1,
    justifyContent: "space-evenly",
    height: "100%",
  },
  screen2: {
    flex: 1,
    height: 160,
  },
});

export default Profile;
