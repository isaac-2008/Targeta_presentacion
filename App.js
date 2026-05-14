import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Presentacion from './components/Presentacion';

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Presentacion />
      </View>
    </SafeAreaProvider>
  );
}
