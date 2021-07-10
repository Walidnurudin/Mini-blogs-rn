/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image,
  TextInput,
  View,
} from 'react-native';
import Router from './router';

const App = () => {

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});

export default App;
