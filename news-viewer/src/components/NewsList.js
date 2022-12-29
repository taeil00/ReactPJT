import styled from 'styled-components';
import NewsItem from "./NewsItem";
import { useState, useEffect } from 'react';
import axios from 'axios';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}`;

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({category}) =>{

    const [loading, response, error] = usePromise(() => {

        const newsApiURL = "https://newsapi.org/v2/top-headlines?country=kr";
        const ApiKey = '&apiKey=b385cdf4f3ce41968dfaaa04b9d83a65';
        const query = category === 'all' ? '' : `&category=${category}`;

        return axios.get(
            newsApiURL + query + ApiKey
        );

    }, [category]);

    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    //아직 response값이 설정되지 않았을때
    if(!response){
        return null;
    }

    if(error){
        return <NewsListBlock>에러 발생!</NewsListBlock>;
    }

    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;