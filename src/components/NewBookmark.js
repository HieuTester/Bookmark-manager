import { Input } from 'antd';
import Form from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react'

const NewBookmark = (props) => {

    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const handleChangeTitle = e => {
        setTitle(e.target.value)
    };

    const handleChangeUrl = e => {
        setUrl(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim() && url.trim()) {
            const bookmark = {
                title: title,
                url: url
            }
            props.onAddBookmark(bookmark);
            handleReset();
        }
    };

    const handleReset = () => {
        setUrl('');
        setTitle('');
    };

    return (
        <Form onSubmit={handleSubmit}>
    <FormItem
    label="ti">
        <Input/>
    </FormItem>
                <input
                    type="text"
                    placeholder="title"
                    name="title"
                    onChange={handleChangeTitle}
                    value={title}  
                    
                />
                <input
                    type="text"
                    placeholder="URL"
                    name="url"
                    onChange={handleChangeUrl}
                    value={url}
                />
                <hr />
                <button type="submit">Add bookmark</button>
                <button type="button" onClick={handleReset}>
                    Reset
        </button>
        </Form>
    )
}

export default NewBookmark
