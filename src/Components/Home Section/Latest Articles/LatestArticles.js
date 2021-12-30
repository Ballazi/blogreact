import "./LatestArticles.css";
import React, { useState, useEffect } from "react";
// import ArrayOfBlogs from "../../ArrayOfBlogs/ArrayOfBlogs";
import { Link } from "react-router-dom";
import axios from "axios";

let createTopPOst = (data) => {
  return (
    <div key={data.id} className="top-post-section">
      <img src={data.imgURL} alt="kuchbhi" />
      <div className="top-post-section-home-flex">
        <div>
          <Link to={`/${data.category}/${data.id}`}>
            {" "}
            <div className="latest-top-post-section-title-1">
              {data.title.substring(0, 42)}
            </div>{" "}
          </Link>
        </div>
        <div>
          <span className="latest-home-type">{data.category}</span>
          <span className="latest-home-date">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

let CreateLatestArticles = (data) => {
  return (
    <div key={data.id} className="articles-thumbnail">
      <img src={data.imgURL} alt="kuchbhi" />
      <div className="article-heading-home-flex">
        <div>
          <Link to={`/${data.category}/${data.id}`}>
            {" "}
            <div className="latest-post-title-1">{data.title} </div>
          </Link>
          <p>{data.desc.substring(0, 150)}</p>
        </div>
        <div>
          {" "}
          <span className="latest-home-type">{data.category}</span>
          <span className="latest-home-date">{data.time}</span>
        </div>
      </div>
    </div>
  );
};

let LatestArticles = () => {
  const [postNumber, setpostNumber] = useState(6);
  const [blogs, setBlogs] = useState([]);
  const [toppost, setToppost] = useState([]);
  const [slidpost, setSlidpost] = useState([]);

  useEffect(() => {
    const url = "http://node-backend-react-blogs.herokuapp.com/api/v1/home/latestarticles";
    axios
      .get(url, { params: { postNumber: postNumber } })
      .then((res) => {
        setBlogs(res.data.arr);
        setToppost(res.data.arr1);
        setSlidpost(res.data.arr2);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  });

  // let {id1,imgURL1,title1,category1,time1} = slidpost[0];
  // let {id2,imgURL2,title2,category2,time2} = slidpost[1];
  // let {id3,imgURL3,title3,category3,time3} = slidpost[2];


  return (
    <div className="LatestArticles-Container">
      <div className="heading-home-latest border-btm">Latest Articles</div>
      <div className="LatestArticles">
        <div className="articles-left-home">
          {blogs.map(CreateLatestArticles)}
          <div
            onClick={() => setpostNumber(postNumber + 2)}
            className="load-more"
          >
            <i className="fas fa-arrow-down"></i> Load More
          </div>

            {/* {console.log(slidpost)};     */}

          {/* <div
            id="carouselExampleCaptions"
            className="carousel slide margtb2rem"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="low-brigtness radnom5gh415f d-block w-100"
                  src={slidpost[0].imgURL}
                  alt="cover"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${slidpost[0].category}/${slidpost[0].id}`}
                  >
                    {" "}
                    <h5>{slidpost[0].title}</h5>
                  </Link>
                  <p>
                    {slidpost[0].category} {slidpost[0].time}
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  className="low-brigtness radnom54fgh15f d-block w-100"
                  src={slidpost[1].imgURL}
                  alt="sec"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${slidpost[1].category}/${slidpost[1].id}`}
                  >
                    {" "}
                    <h5>{slidpost[1].title}</h5>
                  </Link>
                  <p>
                    {slidpost[1].category} {slidpost[1].time}
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  className="low-brigtness radnom541nhjk5f d-block w-100"
                  src={slidpost[2].imgURL}
                  alt="s"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${slidpost[2].category}/${slidpost[2].id}`}
                  >
                    {" "}
                    <h5>{slidpost[2].title}</h5>
                  </Link>
                  <p>
                    {slidpost[2].category} {slidpost[2].time}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="articles-right-home">
          <div className="advertisement-box-blog">Advertisement</div>

          <br /> */}
          <div className="heading-home-latest border-btm">Top Posts</div>

          <div className="top-post-home margtb2rem">
            {/* <img src={slidpost[0].imgURL} alt="kuch bhi" />

            <Link to={`/${slidpost[0].category}/${slidpost[0].id}`}>
              {" "}
              <div className="latest-post-title-1 margtop1rem">
                {slidpost[0].title}
              </div>
            </Link>

            <div className="margtop1rem">
              <span className="latest-home-type ">
                {slidpost[0].category}
              </span>
              <span className="latest-home-date">{slidpost[0].time}</span>
            </div> */}

            {toppost.map(createTopPOst)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
