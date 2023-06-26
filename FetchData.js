import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./basic.css";

import Newscard from "./Newscard";
function FetchData({Topic}) {
  const [news, setnews] = useState("");

  const fetchdata = async () => {
   
    await axios.get(
    Topic
    ?
    `https://newsapi.org/v2/top-headlines?country=us&category=${Topic}&apiKey=d4333709910c4eadb62f24c5c6e8f0e6`
    :
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=d4333709910c4eadb62f24c5c6e8f0e6'
    )
      
      .then((res) => {
        console.log(res.data.articles);
        setnews(res.data.articles);
      });
  };
  useEffect(() => {
    fetchdata();
  }, [Topic]);
  return (
    <div className="container ">
      <h1 className="container justify-content-center align-items-center">
        <u style={{paddingLeft:"5rem"}} >Top Headlines</u>
      </h1>
      <div className="my-2 news-container justify-content-center align-items-center d-flex flex-column" style={{minHeight:"100vh"}} >
       {
        news?
        
          news.map((news, index)=>
                     
               <Newscard news={news}/>
          )
          
        :
        
          "loading.."
        
       }
          
          
         
      </div>
    </div>
  );
}

export default FetchData;
