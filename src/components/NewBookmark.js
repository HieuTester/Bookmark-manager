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
        <form onSubmit={handleSubmit}>
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
        </form>
    )
}

export default NewBookmark
