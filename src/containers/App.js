import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import SearchBox from '../components/SearchBox';
import Mainpage from '../components/Mainpage';
import Pages from '../components/Pages'
import '../style/style.css'


function App() {
  const [keyword, setKeyword] = useState('');
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('tw');
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    FetchNews(country);
  }, [country]);

  const FetchNews = async (conutryValue, categoryValue, keywordValue) => {
    setIsLoading(true)
    let Url = '';
    if (!categoryValue) {
      Url = `https://newsapi.org/v2/top-headlines?country=${conutryValue}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`;
    } if (categoryValue) {
      Url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${categoryValue}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`;
    } if (keywordValue) {
      Url = `https://newsapi.org/v2/top-headlines?country=${country}&q=${keywordValue}&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1`;
    }
    console.log(Url)
    const response = await fetch(Url);
    const news = await response.json();
    setIsLoading(false);
    console.log(news);
    setNews(news.articles);
    countPages(news.articles);
  }

  const countPages = (data) => {
    let num = data.length / 4
    const newArray = [];
    for (let i = 1; i < num; i++) {
      newArray.push(i)
    }
    setPages(newArray);
  }

  const onChangeCounty = async (countryValue) => {
    if (country !== countryValue) {
      setCountry(countryValue);
      setCategory('');
      FetchNews(countryValue);
    }
  }

  const onChangeCategory = async (categoryValue) => {
    if (category !== categoryValue) {
      setCategory(categoryValue);
      FetchNews(country, categoryValue)
    }
  }

  const handleSearchKeyWord = async (event) => {
    event.preventDefault();
    FetchNews(country, keyword);
    setKeyword('');
  }

  let filterNews = news.slice((page * 5 - 5), (page * 5 - 1));

  return (
    <div div className="App" >
      <Nav
        categoryD={category}
        onChangeCategory={onChangeCategory}
        onChangeCounty={onChangeCounty}
        country={country} />
      <main className="main-news">
        <SearchBox
          keyword={keyword}
          setKeyword={setKeyword}
          handleSearchKeyWord={handleSearchKeyWord} />
        <Mainpage
          news={filterNews}
          isLoading={isLoading} />
      </main>
      <Pages
        isLoading={isLoading}
        pageD={page}
        pages={pages}
        setPage={setPage} />
    </div>
  );
}

export default App;
