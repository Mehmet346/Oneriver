import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Store } from '../../../utils/Store';


const Wallet = () => {

  const { data, setData } = useContext(Store)

  return (
    <SafeAreaView>
      <View style={style.main}>
        <Text style={style.text}>Wallet Screen</Text>
      </View>
    </SafeAreaView>
  );

}

const style = StyleSheet.create({
  text: {},
  main: {backgroundColor: 'powderblue'}
})

export default Wallet;
