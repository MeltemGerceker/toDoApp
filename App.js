/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  
  return (
    <SafeAreaView style={generalStyles.body}>
      <Header title="My To Do App"/>
      <View>
        <Text>To Do App week1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
