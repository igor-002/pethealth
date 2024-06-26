import { StatusBar } from 'expo-status-bar';
import { S  Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Poppins_900Black } from '@expo-google-fonts/poppins';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Pet health</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color:'blue' }}> Go to profile</Link>
    </View>
  );
}

