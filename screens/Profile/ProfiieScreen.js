import { Image, Text, View } from "react-native";

const ProfileScreen = () => {
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
    </View>
  );
};

export default ProfileScreen;
