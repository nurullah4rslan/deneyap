import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ICON, IMAGE} from '../../assets';
import {Category} from '../../components';
const index = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={styles.home}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image style={styles.icon} source={ICON.logo} />
          </View>
          <View>
            <Text>DeneYap</Text>
          </View>
        </View>

        <View>
          <View>
            <Image
              style={[styles.icon, {tintColor: 'red'}]}
              source={ICON.alert}
            />
          </View>
        </View>
      </View>
      {/* search */}
      <View>
        <View
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <View>
            <Image
              source={ICON.search}
              style={[styles.icon, {tintColor: 'grey'}]}
            />
          </View>
          <View>
            <TextInput placeholder="Search" />
          </View>
        </View>
      </View>
      {/* slider */}
      <View style={{alignItems: 'center'}}>
        <ImageBackground
          style={{
            flex: 1,
            width: windowWidth - 40,
            height: windowWidth * 0.5,
            margin: 20,
          }}
          source={IMAGE.slider}
        />
        <View
          style={{
            width: windowWidth - 40,
            justifyContent: 'space-around',
            height: windowWidth * 0.5,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderRadius: 20,
              width: 100,
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 15,
                fontWeight: '800',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}>
              Today
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 25, fontWeight: '800'}}>Free Shipping</Text>
          </View>
        </View>
      </View>
      {/* kategori */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: '700'}}>KATEGORİLER</Text>
          </View>
          <View>
            <Text style={{color: 'blue', fontSize: 12}}>TÜMÜNÜ GÖSTER</Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <Category
            name={'Kategori 1'}
            icon={ICON.alert}
            onPress={() => {
              console.log('1.Kategoriye Yönlendiriliyor');
            }}
          />
          <Category
            name={'Kategori 2'}
            icon={ICON.search}
            onPress={() => {
              console.log('2.Kategoriye Yönlendiriliyor');
            }}
          />
          <Category
            name={'Kategori 3'}
            icon={ICON.logo}
            onPress={() => {
              console.log('3.Kategoriye Yönlendiriliyor');
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default index;
