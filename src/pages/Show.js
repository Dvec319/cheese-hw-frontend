import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
    const post = useLoaderData()

    const div = {
        textAlign: 'center',
        border: '2px solid blue',
        margin: '20px auto',
        width: '60%'
    }

	return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h2>{post.country}</h2>
            <div>
                <h2>Update {post.name}!</h2>
                <Form method="post" action={`/update/${post.id}`}>
                <input type="text" name="name" placeholder="Name" defaultValue={post.name}/>
                <input type="text" name="country" placeholder="Country" defaultValue={post.country}/>
                <button>Update {post.name}!</button>
                </Form>
                <Form method="delete" action={`/delete/${post.id}`}>
                    <button>Delete {post.name}</button>
                </Form>
            </div>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
}

export default Show;
