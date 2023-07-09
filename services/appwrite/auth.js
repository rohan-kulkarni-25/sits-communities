import { Client, Account } from "appwrite";

const client = new Client();

const account = new Account(client);

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
    console.log("loginUser", promise);
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export { loginUser };
