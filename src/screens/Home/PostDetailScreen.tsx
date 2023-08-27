import { StyleSheet, Text, View } from "react-native";
import { useGetPostQuery } from "../../api/blogApi";
import { PostDetailPropsType } from "../../typesNavigation";
import { useCustomSafeAreaInsets } from "../../utils/hooks_and_functions";
import { BackButton } from "../../components/BackButton";
import { spacing, typography } from "../../theme";


export const PostDetailScreen = ({ route }: PostDetailPropsType) => {
  const insets = useCustomSafeAreaInsets();

  const postId = route.params.id;
  const { data: post, isLoading: isPostLoading } = useGetPostQuery(postId);

  if (isPostLoading || post === undefined) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      {/*CUSTOM HEADER*/}
      <View style={s.customHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BackButton />
        </View>
      </View>
      <View style={s.numberContainer}>
        <Text style={s.number}>{`№ ${postId}`}</Text>
      </View>
      <View style={s.contentContainer}>
        <Text style={s.cardTitle}>{post?.title}</Text>
        <Text style={s.cardBody}>{post?.body}</Text>
      </View>

    </View>
  );
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  customHeader: {
    paddingVertical: spacing.p8,
    paddingHorizontal: spacing.p12,
    flexDirection: "row"
  },
  numberContainer: {
    paddingVertical: spacing.p12,
    justifyContent: "center",
    alignItems: "center"
  },
  number: {
    ...typography.Title,
    fontWeight: "bold"
  },
  contentContainer: {
    flex: 1,
    paddingTop: spacing.p32,
    paddingHorizontal: spacing.p16,
    justifyContent: "flex-start"
  },
  cardTitle: {
    ...typography.Title,
    fontWeight: "bold",
    marginBottom: spacing.p12
  },
  cardBody: {
    ...typography.Body
  }
});
