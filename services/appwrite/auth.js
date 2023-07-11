import { Client, Account, Databases } from "appwrite";

const client = new Client();

const account = new Account(client);
const databases = new Databases(client);
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64a93c51b238be3af38c"); // Your project ID

// FUNCTIONS
const loginUser = async () => {
  try {
    const promise = await account.createEmailSession(
      "rohank2502@gmail.com",
      "test12345"
    );
    return promise;
  } catch (error) {
    console.log(error);
  }
};

const getCommunities = () => {
  console.log("Called GetCommunities");
  const promise = databases.listDocuments(
    "64ad226548ad26bccfb1",
    "64ad227306f6e7a14b79"
  );

  promise.then(
    function (response) {
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
};

export { loginUser, getCommunities };
