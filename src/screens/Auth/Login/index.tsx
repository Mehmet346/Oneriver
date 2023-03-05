import React, { useState } from 'react';
import { View, SafeAreaView, Image,  Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from "react-native-vector-icons/FontAwesome5";

const Login = () => {
  const [hidePassword, sethidePassword] = useState(true);

  
  _handleSubmit = async (values) => {
    console.log(values)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ backgroundcolor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 50 }}>
        <View style={{ alignItems: 'center' }}>
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
          onSubmit={this._handleSubmit}
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
              isValid,
              isSubmitting,
              errors,
              handleChange
            }) => (
              <View style={style.form}>
                  <View style={style.placeholder}>
                    <Text style={{fontSize: 20}}>E-Mail</Text>
                  </View>
                <TextInput
                  value={values.email}
                  onChangeText={handleChange('email')}
                  keyboardType={'email-address'}
                  style={style.input}>
                </TextInput>
                <View>
                  <View style={style.placeholder}>
                    <Text style={{fontSize: 20}}>Password</Text>
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

const style = StyleSheet.create({
  hero_description: { color: '#1A4184', fontSize: 24, marginTop: 10, fontWeight: '400' },
  form: { flex: 1, marginTop: 20 },
  placeholder: {marginBottom: 10 },
  OneriverLogo: {width: 192.5, height: 192, marginTop: '3%'},
  input: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    height: 50,
    width: 300,
    borderRadius: 10,
    paddingHorizontal: 25,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#1A4184',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
  },
  error: {
    color: 'red'
  }
})
