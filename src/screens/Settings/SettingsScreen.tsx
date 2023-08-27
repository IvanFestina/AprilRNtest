import { View, Text, StyleSheet } from "react-native";
import { useCustomSafeAreaInsets } from "../../utils/hooks_and_functions";
import { typography } from "../../theme";


export const SettingsScreen = () => {
  const insets = useCustomSafeAreaInsets();

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <Text style={s.title}>Settings Screen</Text>
    </View>
  );
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  Title: {
    ...typography.Title,
    fontWeight: "bold",
  }
});
