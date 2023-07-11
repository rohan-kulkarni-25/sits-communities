import { SafeAreaView, StyleSheet, StatusBar, Platform } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigation from "./navigations/BottomTab";
import useUserStore from "./store/user.store";
import LoginScreen from "./screens/Login/Login";

const height = Platform.OS == "android" ? StatusBar.currentHeight : 0;

const App = () => {
  const user = useUserStore((state) => state.user);
  return (
    <SafeAreaView style={{ flex: 1, marginTop: height }}>
      {user.user !== undefined ? (
        <NavigationContainer>
          <BottomTabNavigation />
        </NavigationContainer>
      ) : (
        <LoginScreen />
      )}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
