import { ADD_BOOKMARK, DELETE_BOOKMARK, SET_BOOKMARK_LIST } from '../actions/types';



const initialBookmarkState = {
  bookmarkList : [
    {title: "redux", id: 1, url: "xdmedia.info", group: {id: 1, title: "React"}},
    {title: "reactjs", id: 1, url: "google.com", group: {id: 2, title: "Lập trình"}},
  ]
};

export default function bookmarksReducer(state = initialBookmarkState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case DELETE_BOOKMARK:
      return state.filter(bookmark => bookmark.id !== action.payload.id);
    case SET_BOOKMARK_LIST:
      return {
        ...state,
        bookmarkList: action.payload.bookmarkList
      }  
    default:
      return state;
  }
}