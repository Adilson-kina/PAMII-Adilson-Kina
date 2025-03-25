import { Text, View, StyleSheet, Button, Pressable} from "react-native";
import { useState, useRef } from 'react';
import * as MediaLibrary from 'expo-media-library';
import { Link } from 'expo-router';
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from 'react-native-view-shot';

import * as ImagePicker from 'expo-image-picker';
import ImageViewer from '@/components/ImageViewer';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';

export default function Index() {
  const imageRef = useRef<View>(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [image, setImage] = useState(null);
  const [shownAppOptions, setShownAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(undefined);

  if(status==null){
    requestPermission();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: false,
      quality: 1
    })

    console.log(`ação foi cancelada:${result.canceled}`);

    if(!result.canceled){
      setImage(result.assets[0].uri);
      setShownAppOptions(true);
    }
    else{
      window.alert("you did not select any image.");
    }
  }

  const reset = () => {
    setShownAppOptions(false);
  }

  const addSticker = () =>{
    setIsModalVisible(true);
  }
  const onModelClose = () => {
    setIsModalVisible(false);
  }
  const saveImage = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert('Saved!');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    /*Things here were made lazyly, ill change later(I hope)*/
    <GestureHandlerRootView style={styles.container}>
      <View>
        {shownAppOptions ? (
          <>
            <View>
              <View ref={imageRef} collapsable={false}>
                <ImageViewer imgSource={image} />
                {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
              </View>
            </View>
            <View style={styles.buttonContainer}>
              {/* Refresh */}
              <Pressable onPress={reset} style={styles.button}>
                <MaterialIcons name="refresh" size={38} color="#24273a" />
              </Pressable>
              {/*Add button*/}
              <Pressable onPress={addSticker} style={styles.button}>
                <MaterialIcons name="add" size={38} color="#24273a" />
              </Pressable>
              {/*Save alt*/}
              <Pressable onPress={saveImage} style={styles.button}>
                <MaterialIcons name="save-alt" size={38} color="#24273a" />
              </Pressable>
            </View>
          </>
        ) : (
          <Pressable onPress={pickImage} style={styles.button}>
            <MaterialIcons name="add" size={38} color="#24273a" />
          </Pressable>
        )}
        <EmojiPicker isVisible={isModalVisible} onModelClose={onModelClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModelClose} />
        </EmojiPicker>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#24273a",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#cad3f5",
  },
  button:{
    backgroundColor: "#c6a0f6",
    padding: 10,
    paddingLeft:13,
    paddingRight:13,
    margin: 5,
    borderRadius: 50,
  },
  buttonContainer:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }
});
