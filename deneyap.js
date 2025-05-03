import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const deneyap = () => {
  return (
    <View>
      <Text>deneyap</Text>
      <Text>Dene yap</Text>
      <View style={{backgroundColor: 'green'}}>
        <TextInput />
      </View>
      <View style={{backgroundColor: 'green', top: 10}}>
        <TextInput secureTextEntry={true} />
      </View>
      <View>
        <Image
          style={{width: 20, height: 20}}
          source={require('./image.png')}
        />
      </View>
      <ImageBackground
        source={require('./image.png')}
        style={{width: 100, height: 100}}>
        <TouchableOpacity style={{backgroundColor: 'red'}}>
          <Text>Selam</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default deneyap;

const styles = StyleSheet.create({});
