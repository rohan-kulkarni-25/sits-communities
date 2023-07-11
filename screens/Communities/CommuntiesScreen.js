import { Text } from "react-native-paper";
import { ScrollView, TouchableOpacity, Image } from "react-native";
import CommunityCard from "./components/CommunityCard";

import SnackbarComponent from "../../components/snackbar";
import useUserStore from "../../store/user.store";
import { useEffect, useState } from "react";
import { getCommunities } from "../../services/firebase/communities";
import useCommunitiesStore from "../../store/communities.store";

const CommunitiesScreen = () => {
  const user = useUserStore((state) => state.user);

  const [data, loadCommunities] = useCommunitiesStore((state) => [
    state.communities,
    state.loadCommunities,
  ]);
  const [communities, setCommunities] = useState([...data]);
  useEffect(() => {
    async function fetchData() {
      const response = await getCommunities();
      setCommunities(response);
      loadCommunities(response);
    }
    fetchData();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={require("../Communities.png")}
        style={{
          width: 70,
          height: 50,
          alignSelf: "center",
          marginVertical: 10,
        }}
      />
      <SnackbarComponent test={`${user._tokenResponse.email} signed in.`} />
      {communities.length > 0 &&
        communities.map((community) => {
          return <CommunityCard data={community} key={community.id} />;
        })}
    </ScrollView>
  );
};

export default CommunitiesScreen;
