// // import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import * as React from 'react';
// import { View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // this will hide alert messages in expo go
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications



// import { MyDrawer } from './components/Draw/MyDrawer';
// import LogIn from './components/LogIn';
// import Feed from './components/Feed';
// import MyForm from './components/MyForm';


// export function EmptyScreen() {
//     return <View />;
// }

// const Stack = createNativeStackNavigator();

// function App() {
//     return (
//         // <GestureHandlerRootView>
//         <SafeAreaView style={{ flex: 1 }}>

//             <NavigationContainer>
//                 <Stack.Navigator>
//                 <Stack.Screen name="User Details" component={MyForm}/>
//                     {/* <Stack.Screen name="Log In" component={LogIn} options={{ headerShown: false }} />
//                     <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />
//                     <Stack.Screen name="Feed" component={Feed} /> */}
//                 </Stack.Navigator>
//             </NavigationContainer>

//         </SafeAreaView>
//         // </GestureHandlerRootView> 
//     );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import MainNavigator from './redux/screens/MainNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MainNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;



