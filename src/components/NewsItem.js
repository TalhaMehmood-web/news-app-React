import React from 'react';

const NewsItem =(props)=>{
  
    let {title, description , imageURL , newsURL, author , date, source} = props;
    return (
        <div>
          <div     className="card my-3" >
            <img src=  {!imageURL?"https://cleantechnica.com/files/2023/05/bmw-ev-v2x-v2g-grid-pge.jpg":imageURL}  className="card-img-top" alt="..."/>
            <div     className="card-body">
              <h5     className="card-title">{title}...</h5>
              <span className="badge bg-success">{source}</span>
              <p     className="card-text">{!description?"A report from the Federal Reserve indicates Americans are feeling the financial strain of infla":description}...</p>
              <p className="card-text"><small className="text-muted"> {!author?"Unkown author":author} on {new Date(date).toGMTString() }</small></p>
              <a href={newsURL} target="_blank" rel="noopener noreferrer"  className="btn btn-sm btn-dark btn-primary">Read More</a>
            </div>
          </div>
        </div>
    );
  
}

export default NewsItem;
