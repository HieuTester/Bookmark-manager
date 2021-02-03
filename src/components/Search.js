import React from 'react'
import { Input, Button, Row } from 'antd';



// const  SearchInput  = Input.Search;

const Search = ({ listTag }) => {
    console.log(listTag)
    return (
        <div className='search-wrapper'>
            <Row className="seach-input" >
                <Input  placeholder="Search by title or url" />
            </Row>
            <Row className='group-tag'>
                <Button type="primary" shape="round" size='small' >All</Button>
                {listTag?.map((item, index) => (
                    <Button type="primary" shape="round" size='small' key={index} >{item} </Button>
                ))}
            </Row>

        </div>
    )
}

export default Search
