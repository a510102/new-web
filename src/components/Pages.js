import React from 'react'

function Pages({ pages, setPage, pageD, isLoading }) {
    return (
        <ul className="pages">
            {!isLoading ?
                pages.map((page, i) => {
                    return (
                        <li key={i}>
                            <button
                                className={pageD === page ? "active" : ""}
                                onClick={() => setPage(page)}>{page}</button>
                        </li>
                    )
                }) : ""
            }
        </ul>
    )
}

export default Pages;