/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
  };

  return (
      <ScrollView>
        <Text style={styles.Text}>HELLLOOO WORLDDDDD! I m back!</Text>
        <TextInput style={styles.Input} placeholder="Oke" />
        <Image source={logo} />
        <Image source={logo} />

      </ScrollView>
  )
}

const styles = StyleSheet.create({
  Text: {
    color: 'red',
  },
  Input: {
    padding: 5,
    borderWidth: 2,
    borderRadius: 5
  }
});

export default App;
