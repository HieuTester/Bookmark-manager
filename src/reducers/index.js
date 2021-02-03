import { ADD_BOOKMARK, DELETE_BOOKMARK, EDIT_BOOKMARK, SET_BOOKMARKS } from '../actions/types';






export default function bookmarksReducer(state = [], action) {
  switch (action.type) {
    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: action.bookmarks.reverse()
      }
    case ADD_BOOKMARK:
      return [action.bookmark, ...state];
    case EDIT_BOOKMARK:
      return state.map((bookmark) => {
        if (bookmark._id === action._id) {
          return {
            ...bookmark,
            ...action.bookmark
          };
        } else {
          return bookmark;
        }
      });
    case DELETE_BOOKMARK:
      return state.filter((bookmark) => bookmark._id !== action._id);
    default:
      return state;
  }
};