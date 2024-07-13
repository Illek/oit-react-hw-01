import Profile from "./Profile/Profile";
import userData from "../userData.json";
import FriendList from "./FriendList/FriendList";
import friends from "../friends.json";

const App = () => {
  return (
    <div>
      <header></header>
      <main>
        <Profile user={userData} />
        <FriendList friends={friends} />
      </main>
    </div>
  );
};

export default App;
