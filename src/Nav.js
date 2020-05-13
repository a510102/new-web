import React from 'react'

function Nav({ onChangeCategory, onChangeCounty }) {
    const categorys = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    return (
        <nav className="nav-list">
            <h1 className="nav-title">
                My News
            </h1>
            <div className="nav-items">
                <div className="nav-item-county">
                    <h3 className="nav-item-title">國家/ 類別:</h3>
                    <input type="button" value="Taiwan" onClick={() => onChangeCounty('tw')} />
                    <input type="button" value="USA" onClick={() => onChangeCounty('us')} />
                </div>
                <div className="nav-item-categary">
                    {
                        categorys.map((category, i) => {
                            return (
                                <input
                                    key={i}
                                    type="button"
                                    value={category}
                                    onClick={() => onChangeCategory(category)} />
                            )
                        })
                    }
                </div>
            </div>

        </nav>
    )
}

export default Nav