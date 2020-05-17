import React from 'react'

function Mainpage({ news, isLoading }) {
    return (
        <ul className="news-list">
            {!isLoading ?
                news.length === 0 ?
                    <div>
                        <h3><i className="fas fa-exclamation-triangle fa-fw"></i>....沒有符合的新聞,請重新搜尋 </h3>
                    </div> :
                    news.map((item, i) => {
                        const newImage = {
                            backgroundImage: `url(${item.urlToImage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                        }
                        return (
                            <li className="news-self" key={i}>
                                <h3 className="news-title">    {item.title}</h3>
                                <div className="news-image" style={newImage}>
                                </div>
                                <p className="news-author">{item.author}  {item.publishedAt}</p>
                                <p className="news-content">{item.description}</p>
                                <a href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer">More...</a>
                            </li>
                        )
                    }) : (
                    <div>
                        <h3>Loading <i className="fas fa-spinner fa-fw fa-spin"></i></h3>
                    </div>)
            }
        </ul >
    )
}

export default Mainpage