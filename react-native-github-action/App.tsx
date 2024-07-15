import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Loading from './assets/loading.svg';

function App() {
  return (
    <View>
      <Text>1111</Text>
      <Loading width={120} height={40} />
      <StatusBar />
    </View>
  );
}

export default App;
