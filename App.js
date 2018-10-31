import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import DropDownMenu from '@ismnoiet/react-native-dropdown';

const { width } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={require('./react.png')} style={styles.img}/>
        </View>

        <Text style={styles.welcome}>react-native-dropdown</Text>
        <Text style={styles.demo}>Demo</Text>

        <DropDownMenu
          style={styles.dropdown}
          data={['item 1', 'item 2', 'item 3']}
          selectedRowBackgroundColor="#f4f7f9"
          selectedRowTextSize={20}
          titleBackgroundColor="#d93a47"
          selectedItemColor="#4caf50"
          titleColor="#fff"
          // highlightBackgroundColor="#e91e63"
          //tintColor="#e9e31e"
        />

        <Text style={styles.footer}>https://github.com/ismnoiet/react-native-dropdown</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  demo: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  img: {
    height: 70,
    width: 70,
  },
  dropdown: {
    height: 50,
    justifyContent: 'center',
    width,
    marginTop: 50,
    borderWidth: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  }
});
