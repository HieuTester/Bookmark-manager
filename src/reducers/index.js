import { ADD_BOOKMARK, DELETE_BOOKMARK, SET_BOOKMARK_LIST } from '../actions/types';



const initialBookmarkState = {
  bookmarkList : [
    {title: "redux", id: 1, url: "xdmedia.info", group: {id: 1, title: "React"}},
    {title: "reactjs", id: 2, url: "google.com", group: {id: 2, title: "Lập trình"}},
  ],
  activeGroup: ''
};



export default function bookmarksReducer(state = initialBookmarkState, action) {
  switch (action.type) {
    case ADD_BOOKMARK:
      const newBookmarkList = [...state.bookmarkList];
      newBookmarkList.push(action.payload)
      return {
        ...state,
        bookmarkList: [...newBookmarkList]
      };
    case DELETE_BOOKMARK:
      const {bookmarkList} = state;
      const newBookmarks =  bookmarkList.filter(bookmark => bookmark.id !== action.payload.id);
      return {
        ...state,
        bookmarkList: [...newBookmarks]
      }
    case SET_BOOKMARK_LIST:
      return {
        ...state,
        bookmarkList: action.payload.bookmarkList
      }  
    default:
      return state;
  }
}