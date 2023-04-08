import { Provider as PaperProvider } from 'react-native-paper';
import theme from './config/theme'
import HomeScreen from './screens/HomeScreen';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <HomeScreen />
    </PaperProvider>
  );
}

export default App;