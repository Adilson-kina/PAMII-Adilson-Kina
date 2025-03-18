import { View, Text } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFound(){
  return(
    <>
      <Stack.Screen options={{ title: 'Not Found' }} />
      <View>
        <Text> Page not found </Text>
        <Link href="/"> Go back to home </Link>
      </View>
    </>
  );
}
