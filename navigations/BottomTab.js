import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommunitiesScreen from "../screens/Communities/CommuntiesScreen";
import StackNavigation from "./Stack";
import ProfileScreen from "../screens/Profile/ProfiieScreen";

const Tab = createMaterialBottomTabNavigator();

const EventsScreen = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 18, color: "gray" }}>
        comming very soon !
      </Text>
    </View>
  );
};


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarColor: "black",
          tabBarIcon: () => (
            <Ionicons name="people-outline" size={24} color="black" />
          ),
        }}
        name="Communities"
        component={StackNavigation}
      />
      <Tab.Screen
        name="Events"
        options={{
          tabBarColor: "black",
          tabBarIcon: () => (
            <Ionicons name="calendar-outline" size={24} color="black" />
          ),
        }}
        component={EventsScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarColor: "black",
          tabBarIcon: () => (
            <Ionicons name="person-outline" size={24} color="black" />
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
