
import React, { useEffect, useState } from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark'
import BookmarksList from './components/BookmarksList'
import Search from './components/Search'
import { Layout, message } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { initiateAddBookmark, initiateEditBookmark, initiateGetBookmarks, initiateDeleteBookmark } from './actions/index'

const { Header, Footer, Content } = Layout;


function App({ bookmarksList, dispatch }) {
  const [listTag, setListTag] = useState([])

  useEffect(() => {
    getBookmarks()
  }, [])

  useEffect(() => {
    // setBookmarks(bookmarksList);
    setListTag(getListTag(bookmarksList));
  }, [bookmarksList]);

  const getBookmarks = () => {
    dispatch(initiateGetBookmarks())
      .then(() => {
        
      })
      .catch((err) => message.error(err.message));
  };




  const addBookmark = (bookmark) => {
    dispatch(initiateAddBookmark(bookmark)).then(() => {
      getBookmarks();
      message.success("Bookmark added successfully!")

    })
      .catch((err) => message.error(err.message));
  };

  const editBookmark = (bookmark) => {
    dispatch(initiateEditBookmark(bookmark)).then(() => {
      getBookmarks();
      message.success("Bookmark added successfully!")
    })
    .catch((err) => message.error(err.message));
  };

  const deleteBookmark = (id) => {
    dispatch(initiateDeleteBookmark(id)).then(() => {
      getBookmarks();
      message.success("Bookmark deleleted successfully!")
    })
    .catch((err) => message.error(err.message));
  };



  function getListTag(bookmarkList) {
    if (bookmarkList) {
      const listTag = bookmarkList.map((bookmark) => {
        return bookmark.tag;
      });
      const listTextTag = listTag.map((tag) => {
        return JSON.stringify(tag);
      });
      const uniTag = [...new Set(listTextTag)];
      const tags = uniTag.map((tag) => {
        return JSON.parse(tag);
      });
      return tags;
    }
  }
  return (
    <>
      <Layout>
        <Header>Bookmark Manager</Header>
        <Content>
          <Search listTag={listTag} />
          <AddBookmark listTags={listTag} addBookmark={addBookmark} editBookmark={editBookmark} />
          <BookmarksList bookmarks={bookmarksList} deleteBookmark={deleteBookmark} />
        </Content>

        <Footer> HieuTt01 © 2 0 2 1</Footer>
      </Layout>
    </>
  );
}


const mapStateToProps = state => {
  return (
    { bookmarksList: state.bookmarks }
  )};

export default connect(mapStateToProps)(App);