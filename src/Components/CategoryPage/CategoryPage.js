
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { useParams, Link } from "react-router-dom";
import { useEffect,  useState } from "react";
import axios from "axios";


let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()

let CreateLatestArticles = (data) => {
    return <div key={data.id} className="articles-thumbnail">
        <img src={data.imgURL} alt="kuchbhi" />
        <div className="article-heading-home-flex">
            <div>
                <Link to={`/${data.category}/${data.id}`}> <div className="latest-post-title-1">
                    {data.title}     </div></Link>
                <p>{data.desc.substring(0, 150)}</p>
            </div>
            <div> <span className="latest-home-type">{data.category}</span>
                <span className="latest-home-date">{data.time}</span>
            </div>
        </div>

    </div>
}


let MultiUse = () => {
    const [postNumber, setpostNumber] = useState(2)
    const { category } = useParams();
    const [blog, setblog] = useState(null);

    useEffect(() => {
        setpostNumber(2);
        const url = "https://node-backend-react-blogs.onrender.com/api/v1/common";
        axios.get(url,{params:{category:category}}).then((res) => {setblog(res.data.arr)}).catch((err) => {console.log(JSON.stringify(err))});
        // console.log(blog);
    },[category])

    return (
        <>
            <NavBar />
            {
                blog ? <>

                    <div className="LatestArticles-Container margtop2rem">
                        <div className="LatestArticles">
                            <div className="articles-left-home">
                                <div className="heading-home-latest border-btm">{category}</div>

                                {blog.slice(0, postNumber).map(CreateLatestArticles)}

                                <div onClick={() => setpostNumber(postNumber + 2)} className="load-more"> <i className="fas fa-arrow-down"></i> Load More</div>

                            </div>
                            <div className="articles-right-home">
                                <div className="advertisement-box">Advertisement</div>
                            </div>
                        </div >
                    </div >
                </> : null
            }

            <Footer />
        </>
    );
}

export default MultiUse;
