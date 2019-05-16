import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import QRbutton from './components/QRbutton';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <QRbutton />
        </Card>
        <Text style={styles.paragraph}>
          click for knowledge
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fa8072',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
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
