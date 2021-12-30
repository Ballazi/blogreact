import "./LatestArticles.css";
import React, { useState, useEffect ,useRef} from "react";
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
  const ref = useRef([
    {
        "id": 0,
        "author": "Balram Kumar",
        "title": "Karan Johar, R Madhavan declare Ranveer Singh's 83 a blockbuster.",
        "imgURL": "https://images.hindustantimes.com/img/2021/11/30/550x309/83_1638255666040_1638255693527.jpg",
        "desc": "The trailer of Ranveer Singh-starrer sports drama 83 is finally out and has impressed viewers as well as people from the film industry. Dia Mirza and R Madhavan said they got goosebumps on watching the trailer while Karan Johar called it a ‘bonafide blockbuster’. R Madhavan appreciated the trailer and also praised Ranveer and Jiiva. He wrote on Twitter, “THIS ONE IS A MASSS BLOCKBUSTER-My Bro @RanveerOfficial and @JiivaOfficial are bloody brilliant. Fantasticccc.” Karan Johar tweeted, “Humungous congratulations to the entire cast and crew!!! This gave me goosebumps and is so emotional and arousing! BONAFIDE BLOCKBUSTER! Kabir!!! You’re the man and Ranveer you just became Kapil Dev with the ease of a veteran! Badhai ho (Congratulations)!”",
        "category": "Bollywood",
        "time": " /November 30 2021",
        "tags": [
            "Ranveer Singh",
            "R Madhavan"
        ],
        "readtime": "2 mins read"
    },
    {
        "id": 1,
        "author": "Shawn Levy",
        "imgURL": "https://nerdist.com/wp-content/uploads/2020/09/Free-Guy-Banner-Poster.jpeg",
        "title": "Free Guy",
        "desc": "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him.",
        "category": "Hollywood",
        "time": " /August 13 2021",
        "tags": [
            "Action",
            "Adventure"
        ],
        "readtime": "10 mins read"
    },
    {
        "id": 2,
        "author": "Jaume Collet-Serra",
        "imgURL": "https://cdn.mos.cms.futurecdn.net/2BYffYyvNPf5fa9Hmudoum.jpg",
        "title": "Jungle Cruise",
        "desc": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his ramshackle boat. Together, they search for an ancient tree that holds the power to heal -- a discovery that will change the future of medicine.",
        "category": "Hollywood",
        "time": " /july 30 2021",
        "tags": [
            "Action",
            "Avengers"
        ],
        "readtime": "5 mins read"
    }
]
)


  useEffect(() => {
    const url = "http://node-backend-react-blogs.herokuapp.com/api/v1/home/latestarticles";
    axios
      .get(url, { params: { postNumber: postNumber } })
      .then(async (res) => {
        setBlogs(res.data.arr);
        setToppost(res.data.arr1);
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }, [postNumber]);

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
          <div
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
                  src={ref.current[0].imgURL}
                  alt="cover"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${ref.current[0].category}/${ref.current[0].id}`}
                  >
                    {" "}
                    <h5>{ref.current[0].title}</h5>
                  </Link>
                  <p>
                    {ref.current[0].category} {ref.current[0].time}
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  className="low-brigtness radnom54fgh15f d-block w-100"
                  src={ref.current[1].imgURL}
                  alt="sec"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${ref.current[1].category}/${ref.current[1].id}`}
                  >
                    {" "}
                    <h5>{ref.current[1].title}</h5>
                  </Link>
                  <p>
                    {ref.current[1].category} {ref.current[1].time}
                  </p>
                </div>
              </div>
              <div className="carousel-item ">
                <img
                  className="low-brigtness radnom541nhjk5f d-block w-100"
                  src={ref.current[2].imgURL}
                  alt="s"
                />
                <div className="carousel-caption d-md-block">
                  <Link
                    to={`/${ref.current[2].category}/${ref.current[2].id}`}
                  >
                    {" "}
                    <h5>{ref.current[2].title}</h5>
                  </Link>
                  <p>
                    {ref.current[2].category} {ref.current[2].time}
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

          <br />
          <div className="heading-home-latest border-btm">Top Posts</div>
          <div className="top-post-home margtb2rem">
            <img src={ref.current[0].imgURL} alt="kuch bhi" />

            <Link to={`/${ref.current[0].category}/${ref.current[0].id}`}>
              {" "}
              <div className="latest-post-title-1 margtop1rem">
                {ref.current[0].title}
              </div>
            </Link>

            <div className="margtop1rem">
              <span className="latest-home-type ">
                {ref.current[0].category}
              </span>
              <span className="latest-home-date">{ref.current[0].time}</span>
            </div>

            {toppost.map(createTopPOst)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
