import { Text, View, StyleSheet } from "react-native";
import { useState } from 'react';
import * ImagePicker from 'expo-image-picker';

/* I did not use async function nor await if not work try again with it
* What to use as docs -> https://docs.expo.dev/versions/latest/sdk/imagepicker/
* */
export default function Index() {
  const [image, setImage] = useState(null);
  const pickImage = () => {
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1
    })
  }

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
