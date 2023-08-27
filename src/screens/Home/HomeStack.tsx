import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { PostDetailScreen } from "./PostDetailScreen";
import { HomeStackNavigator } from "../../typesNavigation";

const Stack = createNativeStackNavigator<HomeStackNavigator>();

export const HomeStack = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
      />
    </Stack.Navigator>
  );
};
