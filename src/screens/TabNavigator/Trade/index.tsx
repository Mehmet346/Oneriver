import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView, Image, ScrollView, FlatList, Text, TouchableOpacity, View } from "react-native";
//@ts-ignore 
import data from '../../../data';
//@ts-ignore 
import { setMessage, sell } from '../../../utils/store/message';
//@ts-ignore 
import { style } from './style'
//@ts-ignore 
import types from './types'

const Trade = () => {
  const dispatch = useDispatch();
  //@ts-ignore 
  const { basket } = useSelector((state: RootState) => state.message);

  const [filter, setFilter] = useState('All');

  const buyItem = (value: types<value>) => {
    dispatch(setMessage(value));
  }

  const sellItem = (value: types<value>) => {
    dispatch(sell(value));
  }

  const Item = ({ ProductName, ProductSymbol, ProductCategory, ProductPrice, ProductChange, id }) => (
    <ScrollView>
      <View>
        <View style={style.container}>
          <View style={style.area}>
            <Image
              style={{ padding: 15, margin: 20, resizeMode: 'contain' }}
              source={{ uri: ProductSymbol }} />
            <Text style={style.ProductTextName}>{ProductName}</Text>

            <View style={style.changeAndPrice}>
              <Text style={style.ProductTextPrice}>{ProductPrice}</Text>
              <Text style={(ProductChange < 0) ? style.ProductNegativeTextChange : style.ProductPositiveTextChange}>{ProductChange}%</Text>
            </View>


            <View style={style.buttonContainer}>
            <TouchableOpacity style={style.buyButton}
              onPress={() => {
                buyItem({
                  name: ProductName,
                  symbol: ProductSymbol,
                  category: ProductCategory,
                  price: ProductPrice,
                  change: ProductChange,
                  id: id,
                  date: new Date().toLocaleString()
                })
              }}
            ><Text style={style.buyTextButton}>Buy</Text></TouchableOpacity>

            <TouchableOpacity style={style.sellButton}
              onPress={() => {
                sellItem({
                  name: ProductName,
                  symbol: ProductSymbol,
                  category: ProductCategory,
                  price: ProductPrice,
                  change: ProductChange,
                  id: id,
                  date: new Date().toLocaleString()
                })
              }}
            ><Text style={style.sellTextButton}>Sell</Text></TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );


  const renderItem = ({ item }) => (         //FlatList Render Item
    <Item key={item.id} ProductName={item.name} ProductCategory={item.category} ProductSymbol={item.symbol} ProductPrice={item.price} ProductChange={item.change} id={item.id} />
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.home}>
        <View style={style.main}>
          <Text style={style.textMainLeft}>Oneriver</Text><Text style={style.textMainRight}>Trade</Text>
        </View>

        <View style={style.filter}>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('All') }}><Text style={(filter === 'All' ? style.ActiveText : style.InavctiveText)}>All</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Crypto') }}><Text style={(filter === 'Crypto' ? style.ActiveText : style.InavctiveText)}>Crypto</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Currency') }}><Text style={(filter === 'Currency' ? style.ActiveText : style.InavctiveText)}>Currency</Text></TouchableOpacity>
        </View>

        <FlatList
          data={(filter == 'Crypto') ? data.filter(item => item.category == 'Crypto') : data && (filter == 'Currency') ? data.filter(item => item.category == 'Currency') : data}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />
      </View>
    </SafeAreaView>
  );

}

export default Trade;
