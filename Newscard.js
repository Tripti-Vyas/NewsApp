import React from 'react';
import { Link } from "react-router-dom";
import './basic.css'

function Newscard({news}) {
  return (
    <div className='' >
      <div className=" row my-2 news-img  " >
              <h5 >{news.title}</h5>
              <div ><img className='img-fluid style={{width:"100%"}, } '  src={news.urlToImage} class="card-img-top" alt="image not found" /></div>
              <div>
                <p class="card-text">
                      {news.description}
                </p>
               <div> published at: {news.publishedAt}</div>
               <Link to={news.url}>View More</Link>
              </div>
            </div>
            
    </div>
  )
}

export default Newscard
