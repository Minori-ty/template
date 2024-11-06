import React from 'react';
import {Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../routers/index.d';

interface IProps {
  navigation: NavigationProp<RootStackParamList>;
}
const Home: React.FC<IProps> = ({navigation}) => {
  navigation.navigate('/Me', {userId: '123'});

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
export default Home;
