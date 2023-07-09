import CommunityDetailScreen from "../screens/Communities/CommunityDetailsScreen";
import CommunitiesScreen from "../screens/Communities/CommuntiesScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Community"
        options={{ headerShown: false }}
        component={CommunitiesScreen}
      />
      <Stack.Screen name="Details" component={CommunityDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
