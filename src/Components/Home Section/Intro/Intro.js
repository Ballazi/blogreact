import './Intro.css';
import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



let createHeroCover = (Data) => {
    return <div key={Data.id} style={{ backgroundImage: `url(${Data.imgURL})` }} className="hero-cover">
        <div className="home-hero-title">

            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">{Data.category}{Data.time}</div>
        </div>
    </div>
}

let createSecondaryHeroCover = (Data) => {
    return <div key={Data.id} className="second-cover">
        <img className="second-cover-gird-img" src={Data.imgURL} alt="cover=2" />
        <div className="home-second-title">
            <Link to={`/${Data.category}/${Data.id}`}>
                <div>
                    {Data.title}
                </div>
            </Link>
            <div className="home-hero-title-date">  {Data.category} {Data.time} </div>
        </div>
    </div>

}

let Intro = () => {
    const [cover, setCover] = useState([]);
    const [secondCover, setSecondCover] = useState([]);

    useEffect (() => {
        const url = "https://nodebackendreactblogs-production.up.railway.app/api/v1/home/intro";
        axios.get(url).then((res) => {setCover(res.data.arr1);setSecondCover(res.data.arr2)}).catch((err) => {console.log(JSON.stringify(err))});
    },[])

    return (
        <div className="Intro-Container">
            <div className="intro">


                {cover.map(createHeroCover)}



                {secondCover.map(createSecondaryHeroCover)}



            </div>
        </div >
    );
}

export default Intro;
