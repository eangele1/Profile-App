import * as React from "react";
import { View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import styles from "./GeneralStyles";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Details":
      return "Biography";
  }
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go To Home" />
    </View>
  );
}

const Root = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
        initialRouteName="Root"
      >
        <Drawer.Screen
          name="Root"
          component={Root}
          options={({ route, navigation }) => ({
            title: "Home",
            headerTitle: getHeaderTitle(route),
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "purple",
            },
            headerLeft: () =>
              getHeaderTitle(route) == "Biography" ? (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ margin: 15 }}
                >
                  <Ionicons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.openDrawer()}
                  style={{ margin: 15 }}
                >
                  <Ionicons name="md-reorder-three" size={30} color="white" />
                </TouchableOpacity>
              ),
          })}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={({ navigation }) => ({
            title: "About",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "purple",
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.openDrawer()}
                style={{ margin: 15 }}
              >
                <Ionicons name="md-reorder-three" size={30} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
