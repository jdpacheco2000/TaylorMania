import { useParams } from "react-router-dom"
import useFetch from "../Common/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigateTo = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigateTo('/');
        });
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p className="author-info">Written by { blog.author }</p>
                    <div className="blog-body">{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;