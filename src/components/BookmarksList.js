import React from 'react';
import { connect } from 'react-redux';
import Bookmark from '../components/Bookmark';
import { deleteBookmark } from '../actions';


function BookmarksList({ bookmarks, deleteBookmark  }) {
  return (
    <div className="bookmark_list-wrapper">
      {bookmarks?.map(bookmark => {
        return (
          <Bookmark bookmark={bookmark} onDelete={deleteBookmark} key={bookmark._id} />
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
export default BookmarksList
// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: _id => {
//       dispatch(deleteBookmark(_id));
//     }
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(BookmarksList);