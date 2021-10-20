// In App.js in a new project

import * as React from 'react';
import Navigation from './config/navigation.js';
import 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screen/LoginScreen';
import {Input} from './components/Input';


export default () => <Navigation/>


