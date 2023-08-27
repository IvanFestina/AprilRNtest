import { TextInputProps, TextInput, View, StyleSheet } from "react-native";
import React from "react";
import { colors, spacing } from "../theme";

type InputProps = {
  Icon: React.ComponentType;
  search: string,
  onInputChangeHandle: (search: string) => void
  clearSearchField: () => void
} & TextInputProps;


export const CustomTextInput = ({ Icon, search, onInputChangeHandle, clearSearchField, ...props }: InputProps) => {

  return (
    <View style={s.container}>
      <TextInput placeholder={"Search..."} style={s.input} {...props}
                 onChangeText={onInputChangeHandle}
                 value={search}
      />
      <View style={s.icon}>
        <Icon />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.palette.neutral400,
    paddingHorizontal: spacing.p16,
    paddingVertical: spacing.p8,
    borderRadius: spacing.p16,
    shadowColor: colors.palette.neutral400,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "white"
  },
  input: {
    paddingVertical: 0,
    flex: 1,
    color: colors.black
  },
  icon: {
    marginRight: spacing.p4
  }
});
