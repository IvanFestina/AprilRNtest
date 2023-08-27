import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack } from "./screens/Home/HomeStack";
import { SettingsScreen } from "./screens/Settings/SettingsScreen";
import { RootTabParamList } from "./typesNavigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "./theme";

const Tab = createBottomTabNavigator<RootTabParamList>();

export const MainNavigator = () => {


  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarLabel: () => null,
      tabBarStyle: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderTopWidth: 0,
        backgroundColor: colors.palette.neutral400
      }
    }}>
      <Tab.Screen name="HomeStack"
                  component={HomeStack}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      const iconName = focused ? "home" : "home-outline";
                      return <Ionicons name={iconName} size={24} color={colors.palette.neutral200} />;
                    }
                  }} />
      <Tab.Screen name="Settings"
                  component={SettingsScreen}
                  options={{
                    tabBarIcon: ({ focused }) => {
                      const iconName = focused ? "settings" : "settings-outline";
                      return <Ionicons name={iconName} size={24} color={colors.palette.neutral200} />;
                    }
                  }}
      />
    </Tab.Navigator>
  );
};
