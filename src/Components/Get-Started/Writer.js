
import React from "react";
import NavBar from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

let componentDidMount = () => {
    window.scrollTo(0, 0);
}
componentDidMount()

let relatedCards = (data) => {
    return <div key={data.id} className="home-latest-post-writer">

        <img src={data.imgURL} alt="latest post" />

        <Link to={`/${data.category}/${data.id}`}> <div className="latest-post-title-1">{data.title} </div></Link>
        <p>{data.desc.substring(0, 150)}   </p>
        <div>
            <span className="latest-home-type">{data.category}
            </span> <span className="latest-home-date">{data.time}   </span>
        </div>
    </div>
}



let WriterProfile = () => {
    const { author } = useParams();
    const [blog, setblog] = useState();
    const [rblog, setrblog] = useState([]);
    const [follow, setfollow] = useState(false);

    useEffect(() => {
        // let blog = ArrayOfBlogs.find(blog => blog.author === author)
        // if (blog) {
        //     setblog(blog)
        // }
        const url = "http://node-backend-react-blogs.herokuapp.com/api/v1/writer";
        axios.get(url,{params:{author:author}}).then((res) => {setblog(res.data.arr);setrblog(res.data.arr1)}).catch((err) => {console.log(JSON.stringify(err))});
    });

    return (
        <>
            <NavBar />
            {
                blog ? <>
                    <div className="user-profile">
                        <div className="user-flex">
                            <div>
                                <Stack direction="row" spacing={2}>

                                    <Avatar sx={{ bgcolor: deepPurple[500], width: 90, height: 90, fontSize: 65 }}>{blog.author.charAt(0)}</Avatar>

                                </Stack>
                            </div>
                            <div className="user-details">
                                <div>  <h2 className="border-btm"> {blog.author} </h2>
                                    <button
                                        onClick={() => setfollow(!follow)} className="login-btn">
                                        {follow ? "Followed" : "Follow"}</button>
                                </div>

                            </div>

                        </div>

                        <div className="more-from">
                            More from {blog.author}
                        </div>
                        <div className="flex">


                            {rblog.map(relatedCards)}
                        </div>
                    </div>

                </> : null
            }
            <Footer />
        </>
    );
}

export default WriterProfile;
