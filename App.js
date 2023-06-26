import 'react-native-gesture-handler';
import {StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './assets/Screens/RegistrationScreen';
import LoginScreen from './assets/Screens/LoginScreen';
import Home from './assets/Screens/Home';
import PostsScreen from './assets/Screens/PostsScreen';
import MapScreen from './assets/Screens/MapScreen';
import CreatePostsScreen from './assets/Screens/CreatePostsScreen';
import CommentsScreen from './assets/Screens/CommentsScreen';
import ProfileScreen from './assets/Screens/ProfileScreen';
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <MainStack.Screen name="PostsScreen" component={PostsScreen} />
          <MainStack.Screen name="Map" component={MapScreen} />
          <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} options={{ headerShown: false }} />
          <MainStack.Screen name="Comments" component={CommentsScreen} />
          <MainStack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: false }} />
       </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 page: {
   flex: 1,
   position: 'relative'
 },
});
