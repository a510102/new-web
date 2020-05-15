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
                        height: '15rem',
                        width: '15rem',
                    }
                    return (
                        <li className="news-self" key={i}>
                            <h3 className="news-title">{item.title}</h3>
                            <div className="news-image" style={newImage}>
                            </div>
                            <p>{item.author} - {item.publishedAt}</p>
                            <p>{item.description}</p>
                            <a href={item.url}>More...</a>
                        </li>
                    )
                })
            }
        </ul >
    )
}

export default Mainpage