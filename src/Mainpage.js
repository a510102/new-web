import React from 'react'

function Mainpage({ news }) {
    return (
        <ul className="news-list">
            {
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
                            <p className="news-content">{item.description} <a href={item.url} target="_blank">More...</a>
                            </p>
                        </li>
                    )
                })
            }
        </ul >
    )
}

export default Mainpage