/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {addLocaleData} from 'react-intl';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import MainView from './src/Components/Views'
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData(en);
addLocaleData(es);

export default class Intl extends Component {
  render() {
    return (
   <MainView/>
    );
  }
}



AppRegistry.registerComponent('Intl', () => Intl);
