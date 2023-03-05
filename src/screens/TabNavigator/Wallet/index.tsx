import React, {  useState } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, Image, ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import data from '../../../data';


const Wallet = () => {

  const { basket } = useSelector((state: RootState) => state.message);

  const [filter, setFilter] = useState('All');


  const Item = ({ ProductName, ProductSymbol, ProductQuantity, ProductPrice}) => (
    <ScrollView>
      <View>
        <View style={style.container}>
          <View style={style.area}>
            <Image
              style={{ padding: 15, margin: 20 }}
              source={{ uri: ProductSymbol }} />
            <Text style={style.ProductTextName}>{ProductName}</Text>

            <View style={style.changeAndPrice}>
              <Text style={style.ProductTextQuantity}>{ProductQuantity}</Text>
              <Text style={style.ProductTextPrice}>{parseFloat(ProductPrice) * parseFloat(ProductQuantity)}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );


  const renderItem = ({ item }) => (         //FlatList Render Item
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

const style = StyleSheet.create({
  safeArea: { backgroundColor: '#FFFFFF', flex: 1 },
  home: {marginTop: 50},
  main: { flexDirection: 'row', marginLeft: 20, marginTop: 2 },
  textMainLeft: { color: '#1A4184', fontSize: 32, marginRight: 5, fontWeight: '400' },
  textMainRight: { color: '#1E1E1E', fontSize: 32, marginLeft: 5, fontWeight: '400' },
  filter: { flexDirection: 'row' ,justifyContent: 'space-between',  marginTop: 10, marginBottom: 10 },
  filterTouch: { backgroundColor: '#EBF3FF', paddingVertical: 8, flex: 1, marginHorizontal: 10 ,  justifyContent: 'center' ,borderRadius: 10 },
  ActiveText: { color: '#1A4184', fontSize: 18, textAlign: 'center', fontWeight: '500' },
  InavctiveText: { color: '#757575', fontSize: 18, textAlign: 'center',  fontWeight: '500' },
  area: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  container: { backgroundColor: '#E7E7E7', marginVertical: 10, marginHorizontal: 30, borderRadius: 10, },
  changeAndPrice: { flexDirection: 'column' },
  buyButton: { backgroundColor: '#A4F198', paddingHorizontal: 20, marginRight: 10, padding: 5, borderRadius: 10 },
  buyTextButton: { color: '#1DBA04', fontWeight: '400' },
  ProductTextPrice: { color: '#9e9e9e', fontWeight: '700', fontSize: 18 },
  ProductTextQuantity: { color: '#000000', fontWeight: '700', fontSize: 18, textAlign: 'right'},
  ProductNegativeTextChange: { color: '#FF0000', textAlign: 'right', fontWeight: '700', fontSize: 15 },
  ProductPositiveTextChange: { color: '#1DBA04', textAlign: 'right', fontWeight: '700', fontSize: 15 },
  ProductTextName: { color: '#000000', fontWeight: '600', fontSize: 20, marginRight: 30 },

})

export default Wallet;
