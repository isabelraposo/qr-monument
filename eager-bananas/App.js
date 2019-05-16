import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import QRlogo from './components/QRlogo';
import QRbutton from './components/QRbutton';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <QRlogo />
        </Card>
        <QRbutton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fa8072',
    padding: 8,
    flexDirection: 'column'
  },
  card: {
    backgroundColor: '#fa8072',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    elevation: null
  }
});
