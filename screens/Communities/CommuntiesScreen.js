import { Text } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native";
import CommunityCard from "./components/CommunityCard";

const CommunitiesScreen = () => {
  const ACM = {
    title: "ACM SITS",
    members: 1000,
    about:
      "Hack At SITS is started to provide a platform for new hackers to build meaningful products. Raw ideas get wasted due to a lack of implementation and guidance. The objective is to provide a platform for such thoughts and create opportunities in the community.Hack At SITS chapter 2 will be a 4-week virtual hackathon. This will help hackers to learn and build their ideas.“Pitch your Hack” will be an in-person event in May.",
    imguri:
      "https://media.licdn.com/dms/image/C560BAQFhqw9xX3l0BA/company-logo_200_200/0/1668426139562?e=1697068800&v=beta&t=GmdiHJUS01M3Yb4wh7z3Lab0d7puKn9iK4bhW9zbTOo",
  };
  const GDSC = {
    title: "GDSC SITS",
    members: 1000,
    about:
      "Hack At SITS is started to provide a platform for new hackers to build meaningful products. Raw ideas get wasted due to a lack of implementation and guidance. The objective is to provide a platform for such thoughts and create opportunities in the community.Hack At SITS chapter 2 will be a 4-week virtual hackathon. This will help hackers to learn and build their ideas.“Pitch your Hack” will be an in-person event in May.",
    imguri:
      "https://media.licdn.com/dms/image/D5607AQE71kEoBKOtrQ/group-logo_image-shrink_92x92/0/1671375702663?e=1689418800&v=beta&t=S1oLkSlPXw1tj2lzHU23esV3pTESxcO1iw3VAcfOlnc",
  };
  const HAS = {
    title: "HACK AT SITS",
    members: 1000,
    about:
      "Hack At SITS is started to provide a platform for new hackers to build meaningful products. Raw ideas get wasted due to a lack of implementation and guidance. The objective is to provide a platform for such thoughts and create opportunities in the community.Hack At SITS chapter 2 will be a 4-week virtual hackathon. This will help hackers to learn and build their ideas.“Pitch your Hack” will be an in-person event in May.",
    imguri:
      "https://media.licdn.com/dms/image/C4D0BAQFBnQBbICAnnw/company-logo_100_100/0/1675228175619?e=1697068800&v=beta&t=rBYFNL7WI8mqPgo5BjnPjbg08GCD-nui3bP2hTxFkak",
  };

  const handleLogout = () => {
    console.log("LOGOUT CALLED");
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Text style={{ fontSize: 20, textAlign: "center", marginVertical: 15 }}>
        SITS COMMUNITIES
      </Text>
      <CommunityCard data={ACM} />
      <CommunityCard data={GDSC} />
      <CommunityCard data={HAS} />
    </ScrollView>
  );
};

export default CommunitiesScreen;
