import React from 'react';
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import { deleteBookmark } from '../actions';


function BookmarksList({ bookmarkList, onDelete }) {
  return (
    <div className="bookmark_list-wrapper">
      {bookmarkList?.map(bookmark => {
        return (
          <Bookmark bookmark={bookmark} onDelete={onDelete} key={bookmark.id} />
        );
      })}
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     bookmarks: state
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteBookmark(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BookmarksList);