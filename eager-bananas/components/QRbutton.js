import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Alert , Button } from 'react-native';
//import { Button } from 'native-base';

//import do QRreader
import QRreader from './QRreader';

export default class QRbutton extends React.Component {
  _onPressButton() {
    <QRreader />
  }
  render() {
    return (
       <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="click for knowledge"
            color="#c4def6"
            onPress={this._onPressButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   //flex: 1,
   //justifyContent: 'center',
   //backgroundColor: '#fa8072',
  },
  button: {
   padding: 0,
   //justifyContent: 'center',
   //backgroundColor: "#aaa"
  },
  buttonContainer: {
    margin: 20
  }
});