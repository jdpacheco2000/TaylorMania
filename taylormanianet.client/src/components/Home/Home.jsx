import { useEffect } from "react";
import BlogList from "../Blog/BlogList"
import useFetch from "../Common/useFetch";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    //const {data: blogs, isPending, error} = useFetch('https://localhost:7198/weatherforecast');
    
    useEffect(() => {
        document.title = 'Home Page - TaylorMania'
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;