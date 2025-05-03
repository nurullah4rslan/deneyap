import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Category = ({name, icon, onPress}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View
          style={{
            backgroundColor: 'red',
            width: windowWidth * 0.15,
            height: windowWidth * 0.15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: windowWidth,
            borderWidth: 3,
            borderColor: 'white',
          }}>
          <Image
            style={{
              width: windowWidth * 0.1,
              height: windowWidth * 0.1,
              padding: 10,
            }}
            source={icon}
          />
        </View>
        <View>
          <Text>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Category;
