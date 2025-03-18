import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} resizeMode="center"/>;
}

const styles = StyleSheet.create({
  image:{
    marginBottom: 20,
    width: "50vw",
    height: "30vh",
  },
});

