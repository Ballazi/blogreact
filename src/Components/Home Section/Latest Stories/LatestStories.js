import "./LatestStories.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let createCards = (data) => {
  return (
    <div key={data.id} className="home-latest-post-btm">
      <img src={data.imgURL} alt="latest post" />

      <Link to={`/${data.category}/${data.id}`}>
        <div className="latest-post-title-1">{data.title}</div>
      </Link>
      <p>{data.desc.substring(0, 150)}</p>
      <div>
        <span className="latest-home-type">{data.category}</span>
        <span className="latest-home-date">{data.time} </span>
      </div>
    </div>
  );
};

let LatestStories = () => {
  const [postNumber, setpostNumber] = useState(4);
  const [blogs, setBlogs] = useState([]);
   
  useEffect(() => {
      const url = "https://nodebackendreactblogs-production.up.railway.app/api/v1/home/lateststories";
      axios.get(url,{params:{num:postNumber}}).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(JSON.stringify)});
  },[postNumber])


  return (
    <div className="latest-stories-Container">
      <div className="latest">
        <div className="heading-home-latest border-btm">Latest Stories</div>

        <div className="home-latest-stories-flex">
          {blogs.map(createCards)}
        </div>
        <div
          onClick={() => setpostNumber(postNumber + 2)}
          className="load-more"
        >
          {" "}
          <i className="fas fa-arrow-down"></i> Load More
        </div>
      </div>
    </div>
  );
};

export default LatestStories;
