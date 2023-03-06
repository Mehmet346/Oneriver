//@ts-ignore 
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  safeArea: { backgroundColor: '#FFFFFF', flex: 1 },
  home: { marginTop: 50 },
  main: { flexDirection: 'row', marginLeft: 20, marginTop: 2 },
  textMainLeft: { color: '#1A4184', fontSize: 32, marginRight: 5, fontWeight: '400' },
  textMainRight: { color: '#1E1E1E', fontSize: 32, marginLeft: 5, fontWeight: '400' },
  filter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 },
  filterTouch: { backgroundColor: '#EBF3FF', paddingVertical: 8, flex: 1, marginHorizontal: 10, justifyContent: 'center', borderRadius: 10 },
  ActiveText: { color: '#1A4184', fontSize: 18, textAlign: 'center', fontWeight: '500' },
  InavctiveText: { color: '#757575', fontSize: 18, textAlign: 'center', fontWeight: '500' },
  area: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  container: { backgroundColor: '#E7E7E7', marginVertical: 10, marginHorizontal: 30, borderRadius: 10, },
  changeAndPrice: { flexDirection: 'column' },
  buyButton: { backgroundColor: '#A4F198', paddingHorizontal: 20, marginRight: 10, padding: 5, borderRadius: 10 },
  buyTextButton: { color: '#1DBA04', fontWeight: '400' },
  ProductTextPrice: { color: '#9e9e9e', fontWeight: '700', fontSize: 18 },
  ProductTextQuantity: { color: '#000000', fontWeight: '700', fontSize: 18, textAlign: 'right' },
  ProductNegativeTextChange: { color: '#FF0000', textAlign: 'right', fontWeight: '700', fontSize: 15 },
  ProductPositiveTextChange: { color: '#1DBA04', textAlign: 'right', fontWeight: '700', fontSize: 15 },
  ProductTextName: { color: '#000000', fontWeight: '600', fontSize: 20, marginRight: 30 },
})