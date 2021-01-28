  
import React, { useEffect, useState } from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark'
import BookmarksList from './components/BookmarksList'
import Search from './components/Search'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const { Header, Footer, Content } = Layout;


function App({ bookmarkList }) {

  const [listGroup, setListgroup] = useState([])

  useEffect(() => {
    setListgroup(getListGroup(bookmarkList))
  }, [])


  function getListGroup(bookmarkList) {
    if (bookmarkList) {
      const listGroup = bookmarkList.map((bookmark) => {
        return bookmark.group;
      });
      const listTextGroup = listGroup.map((group) => {
        return JSON.stringify(group);
      });
      const uniGroup = [...new Set(listTextGroup)];
      const groups = uniGroup.map((group) => {
        return JSON.parse(group);
      });
      return groups;
    }
  }

  return (
    <>
      <Layout>
        <Header>Bookmark Manager</Header>
        <Content>
          <Search listGroup={listGroup}/>
          <AddBookmark listGroup={listGroup}/>
          <BookmarksList bookmarkList={bookmarkList}/>
        </Content>

        <Footer> HieuTt01 © 2 0 2 1</Footer>
      </Layout>
    </>
  );
}


const mapStateToProps = state => ({
  bookmarkList: state.bookmarkList
})


export default connect(mapStateToProps)(App);