import React, {useState} from 'react';

import {
  Modal,
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import AppStyle from '../Assets/Common/AppStyle';

interface Props {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  style?: StyleProp<ViewStyle>;
}

const ModalContainer = (props: Props) => {
  const {visible, onClose, style, onSubmit} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onClose()}
      statusBarTranslucent>
      <Pressable style={AppStyle.modalWrap} onPress={() => onClose()}>
        <View style={[AppStyle.smallModalContainer, style]}>
          <View style={[AppStyle.modalWrapper]}>
            <View style={AppStyle.modalContent}>
              <Text style={styles.loginLabel}>Login</Text>
              <Text>Username</Text>
              <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
              />
              <Text>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={pass => setPassword(pass)}
                value={password}
                secureTextEntry={true}
              />
              <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.loginText}>Log In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    borderRadius: 20,
    backgroundColor: '#38D200',
    marginTop: 20,
    padding: 10,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 22,
    color: 'white',
  },
  loginLabel: {
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 0.15,
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default React.memo(ModalContainer);
