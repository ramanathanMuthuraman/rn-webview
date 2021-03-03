import React from 'react';
import {Button, View} from 'react-native';

const Home = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Gallery"
        onPress={() => props.navigation.navigate('Gallery')}
      />
    </View>
  );
};

export default Home;
