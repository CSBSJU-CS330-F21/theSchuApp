
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import Coffee from './components/Coffee';
import firebase from './database/firebase-db'

export default function App() {
  return (
    <SafeAreaView> 
      <View>
        <Coffee />
      </View>
    </SafeAreaView>
  );
}