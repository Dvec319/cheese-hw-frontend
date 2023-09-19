import { redirect } from "react-router-dom";
import url from "./url";

// createAction
export const createAction = async ({request}) => {
    // parse the form data
    const formData = await request.formData();

    //construct the new cheese for the api call
    const newCheese = {
        name: formData.get('name'),
        origin_country: formData.get('origin_country'),
        type: formData.get('type')
    }

    // making a request to create the cheese
    await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCheese)
    })
    
    // redirect to the index page
    return redirect('/')
}

// updateAction
export const updateAction = async ({request, params}) => {
    // grabbing the id
    const id = params.id
    // parse the form data
    const formData = await request.formData();
    // building the updated cheese
    const updatedCheese = {
        name: formData.get('name'),
        origin_country: formData.get('origin_country'),
        type: formData.get('type')
    }

    //making a request to update the cheese
    await fetch(url + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCheese)
    })
    
    // redirect to the show page
    return redirect(`/post/${id}`)
}

// deleteAction
export const deleteAction = async ({params}) => {
    // grabbing the id
    const id = params.id

    // make a request to delete the cheese
    await fetch(url + id, {
        method: 'delete'
    })

    // redirect to the index page
    return redirect('/')
}