import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "./src/MainNavigator";
import { store } from "./src/api/store";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle={"dark-content"} />
          <MainNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
