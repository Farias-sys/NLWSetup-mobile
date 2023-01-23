import { StyleSheet, Text, View, StatusBar } from 'react-native';
import './src/lib/day'

// Importing fonts

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter';

// Importing components

import { Loading } from './src/components/screens/Loading';
import { Home } from './src/components/screens/Home';
import {Routes} from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  if(!fontsLoaded){
    return (<Loading/>);
  }

  return (
    <>
      <Routes />
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent/>
    </>
  );
}
