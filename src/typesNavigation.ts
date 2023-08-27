import { NavigationProp, NavigatorScreenParams, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackNavigator>
  Settings: undefined
}

export type HomeStackNavigator = {
  Home: undefined
  PostDetail: { id: number }
}


export type PostDetailPropsType = NativeStackScreenProps<HomeStackNavigator, "PostDetail">

export type NavigationUseType = NavigationProp<RootTabParamList>
export const useAppNavigation = () => useNavigation<NavigationUseType>();
