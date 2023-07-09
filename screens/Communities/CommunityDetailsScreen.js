import { useNavigation } from "@react-navigation/native";
import { Image, Text, Dimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Card } from "react-native-paper";

const width = Dimensions.get("window").width;
console.log(width);

const CommunityDetailScreen = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();
  console.log(data);
  navigation.setOptions({ headerTitle: data.title });

  return (
    <ScrollView style={{ flex: 1, padding: 15 }}>
      <Image
        source={{ uri: data.imguri }}
        style={{ width: width, height: width }}
      />
      <View>
        <Text style={{ fontSize: 16 }}>About us</Text>
        <Text>{data.about}</Text>
      </View>
    </ScrollView>
  );
};

export default CommunityDetailScreen;
