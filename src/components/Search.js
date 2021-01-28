import React from 'react'
import { Input, Button, Row } from 'antd';



// const  SearchInput  = Input.Search;

const Search = ({ listGroup }) => {
    return (
        <div className='search-wrapper'>
            <Row className="seach-input" >
                <Input  placeholder="Search by title or url" />
            </Row>
            <Row className='group-tag'>
                <Button type="primary" shape="round" size='small' >All</Button>
                {listGroup?.map((item) => (
                    <Button type="primary" shape="round" size='small' key={item.id} >{item.title} </Button>
                ))}   {listGroup?.map((item) => (
                    <Button type="primary" shape="round" size='small' key={item.id} >{item.title} </Button>
                ))}
            </Row>

        </div>
    )
}

export default Search
