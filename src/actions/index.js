import { ADD_BOOKMARK, DELETE_BOOKMARK } from './types';


const genNewId = () => Math.random().toString(36).substr(2, 23)

export const addBookmark = ({ title, url }) => ({
  type: ADD_BOOKMARK,
  payload: {
    id: genNewId(),
    title,
    url
  }
});

export const deleteBookmark = id => ({
  type: DELETE_BOOKMARK,
  payload: {
    id
  }
});