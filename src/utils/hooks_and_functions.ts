// import { AppDispatch, RootState } from "../api/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Post } from "../api/mainTypes";

export function useCustomSafeAreaInsets() {
	return useSafeAreaInsets();
}

export const filterPostsByTitleAndBody = (posts: Post[], searchKeyword: string): Post[] => {
	const lowerCaseKeyword = searchKeyword.toLowerCase();
	return posts.filter((post) => {
		const { title, body } = post;
		return title.toLowerCase().includes(lowerCaseKeyword) || body.toLowerCase().includes(lowerCaseKeyword);
	});
};

export const paginatePosts = (posts: Post[], pageNumber: number): Post[] => {
	const postsPerPage = 20;
	const startIndex = (pageNumber - 1) * postsPerPage;
	return posts.slice(startIndex, startIndex + postsPerPage);
};
