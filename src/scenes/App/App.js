import React, { Component } from 'react';
import { DemoWidget } from '../../components';

const App = () => <DemoWidget onPress={() => console.log('Can\'t touch this!')} />;

export default App;

