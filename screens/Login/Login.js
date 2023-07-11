import { TouchableOpacity, View, Text } from "react-native";

import useUserStore from "../../store/user.store";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { logUserIn } from "../../services/firebase/auth";

const LoginScreen = () => {
  const addUser = useUserStore((state) => state.addUser);
  const [email, setEmail] = useState("rohank2502@gmail.com");
  const [password, setPassword] = useState("test12345");
  const handleLogin = async () => {
    let response = await logUserIn();
    addUser(response);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: 300, flexDirection: "column", gap: 30 }}>
        <TextInput
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={{ borderRadius: 10 }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{ borderRadius: 10 }}
        />
        <Button
          icon="login"
          mode="contained-tonal"
          onPress={handleLogin}
          style={{ borderRadius: 10, paddingVertical: 5 }}
        >
          LOGIN
        </Button>
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 20,
          fontSize: 18,
        }}
      >
        made with <Entypo name="heart" size={18} color="red" />
      </Text>
    </View>
  );
};

export default LoginScreen;
