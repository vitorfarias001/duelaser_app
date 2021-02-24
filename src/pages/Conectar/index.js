import React from "react";
import { useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";
import MaterialProvider from "../../hook/MaterialProvider";

import Feed from "./Feed";
import Buscar from "./Buscar";
import Pasta from "./Pasta";
import Biblioteca from "./Biblioteca";
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      style={{ borderTopColor: "red" }}
      tabBarOptions={{
        activeTintColor: "#03a9e5",
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarLabel: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" color={color} size={size} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Pasta"
        component={Pasta}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="camera" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Biblioteca"
        component={Biblioteca}
        options={{
          tabBarLabel: "Biblioteca",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="paste" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Conectar() {
  return (
    <MaterialProvider>
      <MyTabs />
    </MaterialProvider>
  );
}
