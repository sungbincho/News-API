import React, { useState } from "react";
import axios from "axios";
import TopHeader from "../components/common/TopHeader";
import SearchInput from "../components/news/SearchInput";
import NewsList from "../components/news/NewsList";

const NewApiPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  
  const handleClick = () => {
    //템플릿 리터럴을 사용
    const url = `https://newsapi.org/v2/everything?q=${searchInput}&from=2021-10-28&sortBy=publishedAt&apiKey=1a15867bbf0143ce9b4f8390134b2e83`
    axios.get(url).then(({ data }) => {
      console.log(data);
      setNewsList(data.articles);
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setSearchInput(value);
  };

  return (
    <>
      <TopHeader title={"뉴스 검색"}></TopHeader>
      <SearchInput
        handleChange={handleChange}
        handleClick={handleClick}
      ></SearchInput>
      <NewsList news={newsList}></NewsList>
    </>
  );
};

export default NewApiPage;
