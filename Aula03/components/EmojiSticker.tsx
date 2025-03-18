import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-animated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  return (
    <View style={{ top: -350 }}>
      <Animated.Image source={stickerSource} resizeMode="contain" style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}

const doubleTap = Gesture.Tap()
	.numberOfTaps(2)
	.onStart(() => {
		if (scaleImage.value !== imageSize * 2) {
			scaleImage.value = setImage.value * 2;
		}
		else {
			scaleImage.value = Math.round(scaleImage.value / 2);
		}
	});

const imageStyle = useAnimatedStyle(() => {
  return {
    width: withSpring(scaleImage.value),
    height: withSpring(scaleImage.value),
  };
});

