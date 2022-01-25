import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import LoginModal from '../Components/LoginModal';

const Landing = ({navigation}: {navigation: any}) => {
  const [modalLoginVisible, setModalLoginVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/Images/background.png')}
        style={styles.background}>
        <View>
          <Image
            source={require('../Assets/Images/logo.png')}
            style={styles.image}
          />
          <Pressable
            onPress={() => {
              setModalLoginVisible(true);
            }}
            style={styles.button}>
            <Text style={styles.loginText}>Log In</Text>
          </Pressable>
        </View>
        <LoginModal
          visible={modalLoginVisible}
          onClose={() => {
            setModalLoginVisible(false);
          }}
          onSubmit={() => {
            navigation.navigate('Home');
            setModalLoginVisible(false);
          }}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderRadius: 20,
    backgroundColor: 'white',
    color: 'red',
    marginTop: 20,
    padding: 10,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
  },
});

export default Landing;
