import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Store } from '../../../utils/Store';
import TabStack from '../../TabNavigator/tabNavigator';


const Wallet = () => {

  const { data, setData } = useContext(Store)

  return (
      <TabStack></TabStack>
  );

}

const style = StyleSheet.create({
  text: {},
  main: {backgroundColor: 'powderblue'}
})

export default Wallet;
