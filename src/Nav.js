import React, { useState } from 'react'

function Nav({ onChangeCategory, onChangeCounty, country }) {
    const categorys = ["business", "entertainment", "general", "health", "science", "sports", "technology"];
    const [iscategory, setIscategory] = useState('');
    return (
        <nav className="nav-list">
            <h1 className="nav-title">
                My News
            </h1>
            <div className="nav-items">
                <div className="nav-item-county">
                    <h3 className="nav-item-title">國家</h3>
                    <div className="county-list">
                        <input
                            type="button"
                            className={country === "tw" ? "active" : ""}
                            value="Taiwan"
                            onClick={() => onChangeCounty('tw')} />
                        <input
                            type="button"
                            value="USA"
                            className={country === "us" ? "active" : ""}
                            onClick={() => onChangeCounty('us')} />
                    </div>

                </div>
                <div className="nav-item-category">
                    <h3 className="nav-item-title">類別</h3>
                    <div className="category-list">
                        {
                            categorys.map((category, i) => {
                                return (
                                    <button
                                        key={i}
                                        className={iscategory === category ? 'active' : ''}
                                        onClick={() => {
                                            setIscategory(category);
                                            onChangeCategory(category)
                                        }}
                                    >{category}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav