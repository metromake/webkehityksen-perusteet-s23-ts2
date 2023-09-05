// TODO: Define the interface User with username, email, and optional bio
interface User {
  username: string;
  email: string;
  bio?: string;
}
// TODO: Create a user object using the defined interface. Add all properties
// TODO: Create another user object using the defined interface. Don't add bio
const user1: User = {
  username: 'user1',
  email: 'user1@hhh',
  bio: 'user1 bio',
};
const user2: User = {
  username: 'user2',
  email: 'user2@hhh',
};
// Function to display user information
function displayUserInfo(user: User): void {
  // TODO: console log all properties of a user separately. Example: console.log(user.email)
  console.log(user.username);
  console.log(user.email);
  console.log(user.bio);
}

// Display user information
displayUserInfo(user1);
displayUserInfo(user2);
