import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class QRlogo extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fa8072',
    height: 184,
    width: 135,
    borderRadius: 100
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fa8072',
    height: 200,
    width: 200,
    borderRadius: 100
  }
});
