import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FriendList from "./src/screens/FriendList";
import ImagesList from "./src/screens/ImagesList";
import Counter from "./src/screens/Counter";
import ColorScreen from "./src/screens/ColorScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from "./src/screens/BoxScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: FriendList,
    Images: ImagesList,
    Counter: Counter,
    Colors: ColorScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "react native practice"
    }
  }
);

export default createAppContainer(navigator);
