import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import Mainpage from './Mainpage';
import './style/style.css'


function App() {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('tw');
  useEffect(() => {
    const FetchNews = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`);
      const news = await response.json()
      setNews(news.articles);
    }
    FetchNews();

  }, [country])


  const onChangeCounty = async (country) => {
    setCountry(country);
    const Url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`
    const response = await fetch(Url);
    const news = await response.json()
    setNews(news.articles);
  }

  const onChangeCategory = async (category) => {
    const Url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`
    const response = await fetch(Url);
    const news = await response.json();
    setNews(news.articles);
  }

  const handleSearchKeyWord = async (event) => {
    event.preventDefault();
    const Url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${keyword}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`;
    console.log(Url)
    const response = await fetch(Url);
    const news = await response.json();
    console.log(news)
    setNews(news.articles);
  }

  return (
    <div className="App">
      <Nav onChangeCategory={onChangeCategory} onChangeCounty={onChangeCounty} country={country} />
      <SearchBox setKeyword={setKeyword} handleSearchKeyWord={handleSearchKeyWord} />
      <Mainpage news={news} />
    </div>
  );
}

export default App;
