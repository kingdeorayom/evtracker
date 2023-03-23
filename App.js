import { Provider as PaperProvider } from 'react-native-paper';
import theme from './config/theme'

import { NavigationContainer } from '@react-navigation/native';
import { TabNavigator } from './navigation/TabNavigator';

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <TabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;