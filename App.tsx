
import React from 'react';
import Home from './src/pages/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}

export default App;
