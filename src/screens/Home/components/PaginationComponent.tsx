import { Pressable, StyleSheet, View, Text } from "react-native";
import { BASE_HITSLOP, colors, globalStyle, spacing, typography } from "../../../theme";
import Ionicons from "react-native-vector-icons/Ionicons";

type PaginationComponentPropsType = {
  handlePage: (inc: number) => void
  currentPage: number
  totalPosts: number
}

export const PaginationComponent = ({ totalPosts, handlePage, currentPage }: PaginationComponentPropsType) => {

  const disabledLeft = currentPage <= 1;
  const disabledRight = currentPage * 20 >= totalPosts;

  return (
    totalPosts <= 0
      ?
      <View style={s.emptyContainer}>
        <Text style={typography.Title}>
          List is empty
        </Text>
      </View>
      :
      <View style={s.paginationContainer}>
        <Pressable
          disabled={disabledLeft}
          onPress={() => handlePage(-1)}
          hitSlop={BASE_HITSLOP}
          style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Ionicons name="chevron-back-outline" size={24} color={disabledLeft ? colors.transparent : colors.black} />
        </Pressable>
        <View>
          <Text>{`Page ${currentPage}`}</Text>
        </View>
        <Pressable
          disabled={disabledRight}
          onPress={() => handlePage(1)}
          hitSlop={BASE_HITSLOP}
          style={({ pressed }) => [pressed && globalStyle.pressed]}>
          <Ionicons name="chevron-forward-outline" size={24}
                    color={disabledRight ? colors.transparent : colors.black} />
        </Pressable>
      </View>
  );

};

export const s = StyleSheet.create({
  emptyContainer: {
    marginTop: spacing.p32
  },
  paginationContainer: {
    paddingHorizontal: spacing.p16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: spacing.p16
  }
});
