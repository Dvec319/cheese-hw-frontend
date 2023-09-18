import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';

function Index(props) {
	// grab the loader data using the loaderdata hook
    const cheeses = useLoaderData()

    // map over the cheeses and display them
    return <>
    <div style={{textAlign: 'center'}}>
        <h1>Create a new cheese!</h1>
        <Form method='post' action='/create'>
            <input type='text' name='name' placeholder='Name'/>
            <input type='text' name='country' placeholder='Country'/>
            <button>Create the cheese!</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>
}

export default Index;