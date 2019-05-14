import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class QRbutton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fa8072',
    boxShadow: 0
  },
  logo: {
    height: 184,
    width: 135,
  }
});
