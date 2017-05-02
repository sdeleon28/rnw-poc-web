# rnw-poc-web

Showcases how to write native-ready components in a web project, leveraging react-native-web.

## Installing

```
git clone https://github.com/sdeleon28/rnw-poc-web
cd rnw-poc-web
yarn install
```

## Running

```
yarn run dev
```

Then fire up your browser at [https://localhost:3000](https://localhost:3000).

## Details

react-native-web works by providing abstract UI building blocks that are analogous to the ones used in React Native. It works with the same subset of CSS-in-JS that's available in React Native. 

Creating a native-ready component is usually a matter of using `View`, `Text`, `TouchableOpacity`, etc, instead of `div`, `a`, etc.

The source for the demo component in this repo is at `src/components/DemoWidget` and looks like this:

```
import React, { Component, PropTypes as pt } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Touchable } from '../';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  touchable: {
    backgroundColor: '#CAE6FE'
  }
});

const DemoWidget = ({ onPress }) => (
  <View style={styles.container}>
    <Image
      source={require('../../assets/react-native-web.png')}
      style={styles.logo}
    />
    <Touchable
      onPress={onPress}
      style={styles.touchable}>
      <Text style={styles.welcome}>
        Welcome to React Native for Web Starter!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.web.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Alt+Cmd+I for dev menu
      </Text>
    </Touchable>
  </View>
);

DemoWidget.propTypes = {
  onPress: pt.func.isRequired,
};

export default DemoWidget;
```
