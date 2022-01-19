import './Latest.css';
import React, {useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

let createCards = (card) => {
    return <div key={card.id} className="home-latest-post">
        <img src={card.imgURL} alt="latest post" />

        <Link to={`/${card.category}/${card.id}`}> <div className="latest-post-title-1">
            {card.title}     </div></Link>

        <p> {card.desc.substring(0, 150)}</p>
        <div>
            <span className="latest-home-type"> {card.category}</span> <span className="latest-home-date"> {card.time}</span>
        </div>
    </div>
}
let Latest = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const url = "https://node-backend-react-blogs.herokuapp.com/api/v1/home/latest";
        axios.get(url).then((res) => {setBlogs(res.data.arr)}).catch((err) => {console.log(JSON.stringify(err))});
    },[])

    return (
        <div className="latest-Container">
            <div className="latest">

                <div className="heading-home-latest border-btm">The Latest</div>

                <div className="home-latest-flex">
                    {blogs.map(createCards)}
                </div>
            </div>
        </div >
    );
}

export default Latest;
