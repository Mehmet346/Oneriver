import { useState } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from "react-native-vector-icons/FontAwesome5";
import { setLogged } from '../../../utils/store/message';
//@ts-ignore 
import { style } from "./style";
//@ts-ignore  
import types from ".types";
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';

const Login = () => {
  const [hidePassword, sethidePassword] = useState(true);
  const dispatch = useDispatch();


  const _handleSubmit = async (values: types<value>) => {
    auth()
  .signInWithEmailAndPassword(values.email, values.password)
  .then(() => {
    console.log('User account created & signed in!');
    dispatch(setLogged(true));
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

  return (
    <SafeAreaView style={style.SafeArea}>
      <View style={style.main}>
        <View style={style.Image}>
          <Image
            style={style.OneriverLogo}
            source={require('../../../assets/png/oneriver_icon.png')}
          />
          <Text style={style.hero_description}>Welcome to Oneriver</Text>
        </View>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={_handleSubmit}
          validationSchema={
            yup.object().shape({
              email: yup.string().email().required('Email address is required'),
              password: yup.string().required('Password address is required'),
            })
          }
        >
          {
            ({
              values,
              handleSubmit,
              handleChange
            }) => (
              <View style={style.form}>
                <View style={style.placeholder}>
                  <Text style={style.InputText}>E-Mail</Text>
                </View>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  keyboardType={'email-address'}
                  style={style.input}>
                </TextInput>
                <View>
                  <View style={style.placeholder}>
                    <Text style={style.InputText}>Password</Text>
                  </View>
                  <TextInput
                    value={values.password}
                    onChangeText={handleChange('password')}
                    style={style.input}
                    secureTextEntry={hidePassword}>
                  </TextInput>
                  <TouchableOpacity onPress={() => sethidePassword(!hidePassword)} style={{ position: 'absolute', right: 15, top: 50 }}>
                    <Icon name={(hidePassword) ? "eye-slash" : "eye"} size={25} color={"black"}></Icon>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={style.button}
                  onPress={handleSubmit}
                >
                  <Text style={style.button_text}>Login</Text>
                </TouchableOpacity>
              </View>
            )
          }
        </Formik>
      </View>
    </SafeAreaView>
  );
}
export default Login;


