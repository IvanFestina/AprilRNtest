import React, { useState } from "react";
import { FlatList, ListRenderItem, Pressable, StyleSheet, Text } from "react-native";
import { Post } from "../../../api/mainTypes";
import { colors, globalStyle, spacing, typography } from "../../../theme";
import { useAppNavigation } from "../../../typesNavigation";
import { PaginationComponent } from "./PaginationComponent";
import { paginatePosts } from "../../../utils/hooks_and_functions";

type PostsListTypeProps = {
  posts: Post[]
}

const ITEM_HEIGHT = 120;

export const PostsList = ({ posts }: PostsListTypeProps) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigation = useAppNavigation();

  const totalPosts = posts.length;
  // FILTER FOR PAGINATION
  const paginatedPosts = paginatePosts(posts, currentPage);

  const handlePage = (inc: number) => {
    setCurrentPage(prevState => prevState + inc);
  };


  // P O S T   I T E M
  const RenderCardItem: ListRenderItem<Post> = ({ item }) => {
    const onItemPressHandle = () => {
      navigation.navigate("HomeStack", { screen: "PostDetail", params: { id: item.id } });
    };
    return (
      <Pressable key={item.id}
                 style={({ pressed }) => [s.cardItemContainer, { height: ITEM_HEIGHT }, pressed && globalStyle.pressed]}
                 onPress={onItemPressHandle}
      >
        <Text numberOfLines={1} style={s.cardTitle}>{item.title}</Text>
        <Text numberOfLines={3} style={s.cardBody}>{item.body.substring(0, 100)}...</Text>
      </Pressable>
    );
  };


  return (
    <FlatList
      getItemLayout={(data, index) => (
        { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
      )}
      data={paginatedPosts}
      style={s.cardListContainer}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderCardItem}
      ListFooterComponent={<PaginationComponent totalPosts={totalPosts} currentPage={currentPage}
                                                handlePage={handlePage} />}
    />
  );
};

export const s = StyleSheet.create({
  cardListContainer: {
    paddingHorizontal: spacing.p16
  },
  cardItemContainer: {
    height: 120,
    backgroundColor: "white",
    marginTop: spacing.p16,
    padding: spacing.p16,
    borderRadius: spacing.p8,
    shadowColor: colors.palette.neutral400,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4
  },
  cardTitle: {
    ...typography.Title,
    fontWeight: "bold",
    marginBottom: spacing.p8
  },
  cardBody: {
    ...typography.Body
  }
});
