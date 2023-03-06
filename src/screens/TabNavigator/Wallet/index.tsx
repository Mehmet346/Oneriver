import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, Image, ScrollView, FlatList, Text, TouchableOpacity, View } from "react-native";
//@ts-ignore 
import data from '../../../data';
//@ts-ignore 
import { style } from './style';
//@ts-ignore 
import types from './types';


const Wallet = () => {
  //@ts-ignore 
  const { basket } = useSelector((state: RootState) => state.message);
  const [filter, setFilter] = useState('All');

  const Item = ({ ProductName, ProductSymbol, ProductQuantity, ProductPrice }): types<value> => (
    <ScrollView>
      <View>
        <View style={style.container}>
          <View style={style.area}>
            <Image
              style={{ padding: 15, margin: 20, resizeMode: 'contain' }}
              source={{ uri: ProductSymbol }} />
            <Text style={style.ProductTextName}>{ProductName}</Text>

            <View style={style.changeAndPrice}>
              <Text style={style.ProductTextQuantity}>{ProductQuantity}</Text>
              <Text style={style.ProductTextPrice}>{ProductPrice}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );


  const renderItem = ({ item }): types<value> => (         //FlatList Render Item
    <Item key={item.id} ProductName={item.name} ProductSymbol={item.symbol} ProductQuantity={item.quantity} ProductPrice={item.price} ProductChange={item.change} id={item.id} />
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.home}>
        <View style={style.main}>
          <Text style={style.textMainLeft}>My</Text><Text style={style.textMainRight}>Wallet</Text>
        </View>

        <View style={style.filter}>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('All') }}><Text style={(filter === 'All' ? style.ActiveText : style.InavctiveText)}>All</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Crypto') }}><Text style={(filter === 'Crypto' ? style.ActiveText : style.InavctiveText)}>Crypto</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Currency') }}><Text style={(filter === 'Currency' ? style.ActiveText : style.InavctiveText)}>Currency</Text></TouchableOpacity>
        </View>

        <FlatList
          data={(filter == 'Crypto') ? basket.filter(item => item.category == 'Crypto') : data && (filter == 'Currency') ? basket.filter(item => item.category == 'Currency') : basket}
          renderItem={renderItem}
          keyExtractor={basket => basket.id}
        />
      </View>
    </SafeAreaView>
  );

}

export default Wallet;
