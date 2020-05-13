import React from 'react'

function SearchBox({ setKeyword, handleSearchKeyWord }) {
    return (
        <form className="searchbox" onSubmit={event => handleSearchKeyWord(event)}>
            <input
                type="text"
                placeholder="Type key word..."
                onChange={e => setKeyword(e.target.value)} />
            <input
                type="button"
                value="搜尋"
                onClick={handleSearchKeyWord} />
        </form>
    )
}

export default SearchBox