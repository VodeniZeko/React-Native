import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FriendList from "./src/screens/FriendList";
import ImagesList from "./src/screens/ImagesList";
import Counter from "./src/screens/Counter";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: FriendList,
    Images: ImagesList,
    Counter: Counter
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "react native practice"
    }
  }
);

export default createAppContainer(navigator);
