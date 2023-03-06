import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  SafeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  Image: { alignItems: 'center' },
  InputText: { fontSize: 20 },
  main: { backgroundcolor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 50 },
  hero_description: { color: '#1A4184', fontSize: 24, marginTop: 10, fontWeight: '400' },
  form: { flex: 1, marginTop: 20 },
  placeholder: { marginBottom: 10 },
  OneriverLogo: { width: 192.5, height: 192, marginTop: '3%' },
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