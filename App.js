import { SafeAreaView, StyleSheet } from 'react-native';


import Presentacion from './Components/Presentacion';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Presentacion />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1', 
    padding: 8,
  },
});