import { StyleSheet, Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts,Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold,Poppins_800ExtraBold, Poppins_900Black } from "@expo-google-fonts/poppins"
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


const RooyLayout = () => {
  const[fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Poppins_900Black
  });

  useEffect(() =>{
    if(error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (

    <Stack>
    
        <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>

  );
};

export default RooyLayout;
