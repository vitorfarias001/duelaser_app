import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import SearchDue from "./pages/SearchDue";
import DueFlowControll from "./pages/DueFlowControll";
import ErrorPage from "./pages/ErrorPage";
import Conectar from "./pages/Conectar";
import Camera from "./pages/Conectar/Camera";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="SearchDue" component={SearchDue} />
        {/* <AppStack.Screen name="Its" component={Its} /> */}
        {/* <AppStack.Screen name="Incidents" component={Incidents} /> */}
        {/* <AppStack.Screen name="Detail" component={Details} /> */}
        <AppStack.Screen name="Controll" component={DueFlowControll} />
        <AppStack.Screen name="Conectar" component={Conectar} />
        <AppStack.Screen name="Camera" component={Camera} />
        <AppStack.Screen name="Error" component={ErrorPage} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
