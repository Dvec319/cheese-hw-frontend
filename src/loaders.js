import url from './url'

// Index Loader
export const indexLoader = async () => {
    // making the api call
    const response = await fetch(url)
    // turning response into a JS object
    const cheeses = await response.json()
    // returning the JS object for the Index component
    return cheeses
}

// Show Loader
export const showLoader = async ({params}) => {
    // grabbing the id
    const id = params.id
    // making an api call
    const response = await fetch(url + id)
    // turning response into a JS object
    const cheese = await response.json()
    // returning the JS object for the Show component
    return cheese
}