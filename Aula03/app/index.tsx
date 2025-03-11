import { Text, View, StyleSheet, Button, Image } from "react-native";
import { useState } from 'react';
import { Link } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function Index() {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1
    })

    console.log(`ação foi cancelada:${result.canceled}`);

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Choose image" color="#c6a0f6" onPress={pickImage} />
      {/* The Router doesn't Work yet*/}
      <Link href="/about.tsx">Click me to change to the About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#24273a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    marginBottom: 20,
    width: 400,
    height: 400,
    borderRadius: 10,
  },
});
