import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import AppHeader from '../components/AppHeader';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  // useEffect(() => {
  //   Alert.alert(
  //     'Thông báo',
  //     'Ứng dụng muốn truy cập vào vị trí của bạn',
  //     [
  //       {
  //         text: "Don't Allow",
  //         onPress: () => console.log("Don't Allow Pressed"),
  //         style: 'cancel',
  //       },
  //       {text: 'OK', onPress: () => console.log('OK Pressed')},
  //     ],
  //     {cancelable: false},
  //   );
  // }, [6]);

  const handleLogin = () => {
    if (username === '') {
      setUsernameError('Please complete all information');
    } else {
      setUsernameError('');
    }

    if (pass === '') {
      setPasswordError('Please complete all information');
    } else {
      setPasswordError('');
    }

    if (username !== '' && pass !== '') {
      setError('');
      Alert.alert(`Chào mừng ${username} đăng nhập`);

      navigation.navigate('Tab');
    } else {
      setError('Vui lòng điền đủ thông tin agggggggg');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="close"
            header={'My Tickets'}
            action={() => navigation.goBack()}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username "
            placeholderTextColor="black"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <Text style={{color: 'red'}}>{usernameError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            value={pass}
            onChangeText={text => setPass(text)}
            secureTextEntry
          />
          <Text style={{color: 'red'}}>{passwordError}</Text>
        </View>
        {/* <Text style={{color: 'red', alignSelf: 'center'}}>{error}</Text> */}
        <View style={styles.touchContainer}>
          <TouchableOpacity style={styles.login} onPress={handleLogin}>
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.White,
                fontSize: SPACING.space_16,
                fontFamily: FONTFAMILY.font_bold,
              }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          marginTop: SPACING.space_36 * 2,
          marginRight: SPACING.space_24,
        }}>
        <Text
          style={{
            color: COLORS.White,
            fontFamily: FONTFAMILY.font_light,
            fontSize: FONTSIZE.size_14,
          }}>
          Forgot Password
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },

  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  inputContainer: {
    marginTop: SPACING.space_36 * 3,
    marginBottom: SPACING.space_18,
  },
  input: {
    height: 50,
    width: 370,
    marginHorizontal: SPACING.space_20,
    borderColor: COLORS.Gray,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 1,
    fontSize: FONTSIZE.size_14,
    backgroundColor: COLORS.White,
    paddingHorizontal: SPACING.space_18,
    marginBottom: SPACING.space_18,
  },
  touchContainer: {
    flex: 1,
  },
  login: {
    height: 60,
    backgroundColor: COLORS.Orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDERRADIUS.radius_25,
    marginHorizontal: SPACING.space_36,
  },
});
