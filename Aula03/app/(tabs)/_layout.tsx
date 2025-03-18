import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#c6a0f6',
        headerStyle: {
          backgroundColor: '#24273a',
        },
        headerShadowVisible: false,
        headerTintColor: '#cad3f5',
        tabBarStyle: {
        backgroundColor: '#24273a',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={ focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }} 
      />
      <Tabs.Screen
        name="about"
        options={{ 
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={ focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}
