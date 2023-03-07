import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, Image, ScrollView, FlatList, Text, TouchableOpacity, View } from "react-native";

//@ts-ignore 
import { style } from './style'
//@ts-ignore 
import types from './types'

const Transaction = () => {
  //@ts-ignore 
  const { debt_state } = useSelector((state: RootState) => state.message);

  const [filter, setFilter] = useState('All');

  const Item = ({ ProductName, ProductSymbol, ProductDate, ProductPrice, ProductType, id }) => (
    <ScrollView>
      <View>
        <View style={style.container}>
          <View style={style.area}>
            <Image
              style={{ padding: 15, margin: 20, resizeMode: 'contain' }}
              source={{ uri: ProductSymbol }} />
            <Text style={style.ProductTextName}>{ProductName}</Text>
              <Text style={style.ProductDateText}>{ProductDate}</Text>
            <View style={style.changeAndPrice}>
              <Text style={style.ProductTextPrice}>{ProductPrice}</Text>
              {(ProductType > 0)? <Text style={(ProductType < 0) ? 
              style.ProductNegativeTextChange 
              : 
              style.ProductPositiveTextChange}>{ProductType} received</Text>
              :<Text style={(ProductType < 0) ? style.ProductNegativeTextChange 
              : style.ProductPositiveTextChange}>{ProductType} sold</Text>}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );


  const renderItem = ({ item }) => (         //FlatList Render Item
    <Item key={item.id} ProductName={item.name} ProductDate={item.date} ProductCategory={item.category} ProductSymbol={item.symbol} ProductPrice={item.price} ProductType={item.buy} id={item.id} />
  );

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.home}>
        <View style={style.main}>
          <Text style={style.textMainLeft}>Oneriver</Text><Text style={style.textMainRight}>Transaction</Text>
        </View>

        <View style={style.filter}>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('All') }}><Text style={(filter === 'All' ? style.ActiveText : style.InavctiveText)}>All</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Crypto') }}><Text style={(filter === 'Crypto' ? style.ActiveText : style.InavctiveText)}>Crypto</Text></TouchableOpacity>
          <TouchableOpacity style={style.filterTouch} onPress={() => { setFilter('Currency') }}><Text style={(filter === 'Currency' ? style.ActiveText : style.InavctiveText)}>Currency</Text></TouchableOpacity>
        </View>

        <FlatList
          data={(filter == 'Crypto') ? debt_state.filter(item => item.category == 'Crypto') : debt_state && (filter == 'Currency') ? debt_state.filter(item => item.category == 'Currency') : debt_state}
          renderItem={renderItem}
          keyExtractor={(debt_state, index) => index}
          inverted
        />
      </View>
    </SafeAreaView>
  );

}

export default Transaction;
