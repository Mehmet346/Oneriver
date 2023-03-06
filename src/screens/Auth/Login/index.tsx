import { useState } from 'react';
import { View, SafeAreaView, Image, Text, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
//@ts-ignore 
import { style } from "./style";
//@ts-ignore  
import types from ".types";
import { TextInput } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';


const Login = () => {
  const [hidePassword, sethidePassword] = useState(true);


  const _handleSubmit = async (values: types<value>) => {
    console.log(values)
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


