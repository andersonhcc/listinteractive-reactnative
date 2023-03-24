import { Home } from './src/screens/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Home />
    </GestureHandlerRootView>

  );
}
