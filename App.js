import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FriendList from "./src/screens/FriendList";
import ImagesList from "./src/screens/ImagesList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: FriendList,
    Images: ImagesList
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "react native practice"
    }
  }
);

export default createAppContainer(navigator);
