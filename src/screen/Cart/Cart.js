import React, { Component } from 'react'
import { GetCoffeeOne } from '../../components/Coffee';
import { Text, View } from 'react-native';
import CoffeeTest from './CoffeeTest';
import Coffee from '../../../Data/Coffee'
export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      count: CoffeeTest.name,
    };
  }
  render() {
    return (
      <View>
        <Text>{this.name}</Text>
        <CoffeeTest />
      </View>
    );
  }
}