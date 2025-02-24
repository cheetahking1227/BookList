
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

function App(): React.JSX.Element {

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Login />
        {/* <Home /> */}
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
