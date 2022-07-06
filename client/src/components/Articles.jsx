import React, { useEffect, useState } from 'react'
import { getNews } from '../service/api';
import Article from './Article';

const Articles = () => {
   const [news, setnews] = useState([]) 

  useEffect(()=>{
      dailyNews();
  },[])  

  const dailyNews=async ()=>{
      const response=await getNews();
      setnews(response.data);
      console.log(response);
  }
  return (
    news.map(article=>(
        <Article article={article} />
    ))
  )
}

export default Articles