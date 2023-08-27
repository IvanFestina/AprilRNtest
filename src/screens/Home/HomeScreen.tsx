import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { filterPostsByTitleAndBody, useCustomSafeAreaInsets } from "../../utils/hooks_and_functions";
import { CustomTextInput } from "../../components/CustomTextInput";
import { PostsList } from "./components/PostsList";
import { spacing } from "../../theme";
import { useState } from "react";
import { useGetPostsQuery } from "../../api/blogApi";

export const HomeScreen = () => {

  const [search, setSearch] = useState<string>("");
  const { data: posts, isLoading: isPostsLoading } = useGetPostsQuery();
  const insets = useCustomSafeAreaInsets();

  const onInputChangeHandle = (value: string) => {
    setSearch(value);
  };
  const clearSearchField = () => {
    setSearch("");
  };


  if (isPostsLoading || posts === undefined) {
    return <Text>Loading...</Text>;
  }
  // FILTER FOR SEARCHING POST
  const filteredPosts = filterPostsByTitleAndBody(posts, search);

  const IconToDisplay = () => {
    return (
      <TouchableOpacity onPress={clearSearchField}>
        <Ionicons size={24}
                  name={search ? "close-outline" : "search-outline"}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[s.container, { paddingTop: insets.top }]}>
      <View style={s.inputContainer}>
        <CustomTextInput clearSearchField={clearSearchField} search={search} onInputChangeHandle={onInputChangeHandle}
                         Icon={() => IconToDisplay()} />
      </View>
      <PostsList posts={filteredPosts} />
    </View>
  );
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  inputContainer: {
    paddingHorizontal: spacing.p16,
    paddingTop: spacing.p16,
    alignSelf: "stretch"
  }
});
