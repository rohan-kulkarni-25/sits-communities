import * as React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { Image, TouchableOpacity, View } from "react-native";

import { Client, Account } from "appwrite";
import { useNavigation } from "@react-navigation/native";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64a93c51b238be3af38c"); // Your project ID

const account = new Account(client);

// Go to OAuth provider login page

const CommunityCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <Card
      style={{ margin: 10, backgroundColor: "white" }}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          paddingHorizontal: 15,
          padding: 10,
        }}
      >
        <Image
          style={{ width: 60, height: 60, borderRadius: 10 }}
          source={{ uri: data.imguri }}
        />
        <View style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{data.title}</Text>
          <Text style={{ color: "grey" }}>{data.members} members</Text>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            borderColor: "grey",
            borderWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 10,
          }}
          onPress={async () => {
            account.createOAuth2Session("google");
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>Join</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default CommunityCard;
