import { ADD_BOOKMARK, DELETE_BOOKMARK, SET_BOOKMARK_LIST} from './types';


const genNewId = () => Math.random().toString(36).substr(2, 23)

export const addBookmark = ({ id, title, url, group }) => ({
  type: ADD_BOOKMARK,
  payload: {
    id,
    title,
    url, 
    group
  }
});

export const deleteBookmark = id => ({
  type: DELETE_BOOKMARK,
  payload: {
    id
  }
});

export const setBookmarkList = bookmarkList => {
  return {
      type: SET_BOOKMARK_LIST,
      payload: {
          bookmarkList
      }
  }
}