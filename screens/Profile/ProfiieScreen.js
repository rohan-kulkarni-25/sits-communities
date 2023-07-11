import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import useUserStore from "../../store/user.store";

const ProfileScreen = () => {
  const removeUser = useUserStore((state) => state.removeUser);

  const handleLogout = () => {
    removeUser();
  };
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <Image
        source={{ uri: "https://github.com/rohan-kulkarni-25.png" }}
        style={{ height: 150, width: 150, marginTop: 50, borderRadius: 100 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
        ROHAN KULKARNI
      </Text>
      <Button
        icon="logout"
        mode="contained-tonal"
        onPress={handleLogout}
        style={{ borderRadius: 10, paddingVertical: 5 }}
      >
        LOGOUT
      </Button>
    </View>
  );
};

export default ProfileScreen;
