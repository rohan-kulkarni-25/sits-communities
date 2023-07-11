import { firebaseApp } from "./firebase";

const { collection, getDocs, getFirestore } = require("firebase/firestore");

const db = getFirestore(firebaseApp);

const getCommunities = async () => {
  let communities = [];
  try {
    const querySnapshot = await getDocs(collection(db, "communities"));
    querySnapshot.forEach((doc) => {
      communities.push({ id: doc.id, ...doc.data() });
    });
  } catch (error) {
    alert(error);
  }

  return communities;
};

export { getCommunities };
