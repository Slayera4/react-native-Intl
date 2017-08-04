import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import englishMessages from '../../Translates/en'
import spanishMessages from '../../Translates/es'

import { IntlProvider, FormattedMessage } from 'react-intl';

 let i18nConfig = {
    locale: englishMessages.locale,
    messages: spanishMessages.messages
};
class MainView extends Component {
    onChange(lang){
        i18nConfig.messages = lang === "en" 
        ? englishMessages.messages 
        : spanishMessages.messages
        i18nConfig.locale = lang === "en" 
        ? englishMessages.locale 
        : spanishMessages.locale
        this.setState({lang});
    }
  render() {
    return (
    <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages} textComponent={Text}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
           <FormattedMessage id="1" />       
        </Text>
        <Text style={styles.instructions}>  
            <FormattedMessage id="2" /> 
        </Text>
        <Text style={styles.instructions}>
            <FormattedMessage id="3" /> 
        </Text>
        <Button title="English" onPress={() => this.onChange('en')}/> 
        <Button title="Español" onPress={() => this.onChange('es')}/>
      </View>
      </IntlProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default MainView