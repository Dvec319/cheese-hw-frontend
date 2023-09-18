import { Link } from "react-router-dom";


// write out post prop
function Post ({post}) {

    const div = {
        textAlign: 'center',
        border: '2px solid',
        margin: '15px auto',
        width: '60%'
    }

    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
            <h1>{post.country}</h1>
        </Link>
    </div>
}

export default Post;