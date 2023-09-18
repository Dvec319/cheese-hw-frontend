import Post from '../components/Post';
import { useLoaderData, Form } from 'react-router-dom';
import { useState } from 'react';

function Index(props) {
	// grab the loader data using the loaderdata hook
    const cheeses = useLoaderData()

    const [formData, setFormData] = useState({
        name: '',
        country: ''
    })

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const handleSubmit = (event => {
        setFormData({
            name: '',
            country: ''
        })
    })

    // map over the cheeses and display them
    return <>
    <div style={{textAlign: 'center'}}>
        <h1>Create a new cheese!</h1>
        <Form method='post' action='/create' onSubmit={handleSubmit}>
            <fieldset>
                <label for='nameField' style={{textAlign: 'left'}}>Name</label>
                <input type='text' name='name' placeholder='Name' id='nameField' value={formData.name} onChange={handleChange}/>
                <label for='countryField' style={{textAlign: 'left'}}>Country</label>
                <input type='text' name='country' placeholder='Country' id='countryField' value={formData.country} onChange={handleChange}/>
                <button type='submit'>Create the cheese!</button>
            </fieldset>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>
}

export default Index;