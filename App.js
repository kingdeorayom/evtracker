import { Provider as PaperProvider } from 'react-native-paper';
import theme from './config/theme'
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <StatusBar
          style='auto'
          backgroundColor={theme.colors.background}
        />
        <HomeScreen />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;