import { BASE_HITSLOP, colors, globalStyle } from "../theme";
import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { useAppNavigation } from "../typesNavigation";

type BackButtonProps = {
  onPress?: () => void
}

export const BackButton = ({ onPress }: BackButtonProps) => {

  const navigation = useAppNavigation();

  const onPressHandle = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }

  };

  return (
    <Pressable
      hitSlop={BASE_HITSLOP}
      style={({ pressed }) => [pressed && globalStyle.pressed]}
      onPress={onPressHandle}>
      <Ionicons name="arrow-back" size={28}
                color={colors.textGray} />
    </Pressable>
  );
};
