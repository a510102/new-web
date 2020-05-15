import React from 'react'

function SearchBox({ setKeyword, handleSearchKeyWord }) {
    return (
        <form
            className="searchbox"
            onSubmit={event => handleSearchKeyWord(event)}>
            <div className="searchbox-search">
                <input
                    id="searchbox-input"
                    className="searchbox-input"
                    type="text"
                    onChange={e => setKeyword(e.target.value)} required />
                <label
                    htmlFor="searchbox-input" className="searchbox-input-label">
                    <span className="searchbox-input-label-name">關鍵字</span>
                </label>
            </div>
            <input
                className="searchbox-btn"
                type="button"
                value="搜尋"
                onClick={handleSearchKeyWord} />
        </form>
    )
}

export default SearchBox