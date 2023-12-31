import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo-app-loading';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
  });
  // neveikia kazkodel tas async font uzloadinimas ir apploading komponentas
    return (
      <NavigationContainer 
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
      >
        <Stack.Navigator 
        initialRouteName='Globomantics'
        headerMode='screen'>
          <Stack.Screen 
          name='Globomantics'
          component={Homepage}
          options={{
            header: () =>  <Header headerDisplay='Globomantics'/>
          }}
          />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
    )
}


