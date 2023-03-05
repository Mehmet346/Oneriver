import React, { useContext, useState ,useEffect } from 'react';
import { SafeAreaView, Image ,ScrollView, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Store } from '../../../utils/Store';
import data from '../../../data.json';

const Trade = () => {

  const [filter, setFilter] = useState('All');

  const buyItem = (data) => {

    console.log(data)
  }

  const Item = ({ ProductName, ProductSymbol, ProductPrice, ProductChange, id }) => (
    <ScrollView>
      <View>
        <View style={style.container}>
            <View style={style.area}>
            <Image style={{marginRight: 20}} 
                source={require(`../../assets/png/${ProductSymbol}.png`)}/>
              <Text>{ProductName}</Text>

              <View style={style.changeAndPrice}>
                <Text>{ProductPrice}</Text>
                <Text>{ProductChange}</Text>
              </View>
            

              <TouchableOpacity style={style.buyButton}
                onPress={() => {
                  buyItem({
                    name: ProductName,
                    symbol: ProductSymbol,
                    price: ProductPrice,
                    change: ProductChange,
                    id: id
                  })
                }}
              ><Text>Buy</Text></TouchableOpacity>
            </View>
            </View>
        </View>
    </ScrollView>
  );


  const renderItem = ({ item }) => (         //FlatList Render Item
    <Item key={item.id} ProductName={item.name} ProductSymbol={item.symbol} ProductPrice={item.price}  ProductChange={item.change} id={item.id} />
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF', flex: 1}}>
      <View style={style.main}>
        <Text style={style.textMainLeft}>Oneriver</Text><Text style={style.textMainRight}>Trade</Text>
      </View>

      <View style={style.filter}>
        <TouchableOpacity style={style.filterTouch} onPress={() => {setFilter('All')}}><Text style={(filter === 'All' ? style.ActiveText : style.InavctiveText)}>All</Text></TouchableOpacity>
        <TouchableOpacity style={style.filterTouch} onPress={() => {setFilter('Crypto')}}><Text style={(filter === 'Crypto' ? style.ActiveText : style.InavctiveText)}>Crypto</Text></TouchableOpacity>
        <TouchableOpacity style={style.filterTouch} onPress={() => {setFilter('Currency')}}><Text style={(filter === 'Currency' ? style.ActiveText : style.InavctiveText)}>Currency</Text></TouchableOpacity>
      </View>

      <FlatList
        data={(filter == 'Crypto') ? data.filter(item => item.category == 'Crypto') : data && (filter == 'Currency') ? data.filter(item => item.category == 'Currency') : data  }
        renderItem={renderItem}
        keyExtractor={data => data.id}
      />
    </SafeAreaView>
  );

}

const style = StyleSheet.create({
  main: {flexDirection: 'row', marginLeft: 20, marginTop: 2},
  textMainLeft: {color: '#1A4184', fontSize: 32, marginRight: 5, fontWeight: '400'},
  textMainRight: {color: '#1E1E1E', fontSize: 32, marginLeft: 5, fontWeight: '400'},
  filter: {flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  filterTouch: {backgroundColor: '#EBF3FF', paddingLeft: 15, paddingRight: 15, padding: 10, borderRadius: 10},
  ActiveText: {color: '#1A4184', fontSize: 15, fontWeight: '500'},
  InavctiveText: {color: '#757575', fontSize: 15, fontWeight: '500'},
  area: {flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'},
  container: {backgroundColor: '#E7E7E7', marginVertical: 10, marginHorizontal: 30, borderRadius: 10, },
  changeAndPrice:{flexDirection: 'column'},
  buyButton: {backgroundColor: '#28DE0A', paddingHorizontal: 5, padding: 5, borderRadius: 10}


})

export default Trade;
