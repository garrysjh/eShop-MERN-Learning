import { useState } from 'react'
import { useListingsContext } from '../hooks/useListingsContext'


const ListingForm = () => {
    const { dispatch } = useListingsContext()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const listing = {title, price, description}

        const response = await fetch('http://localhost:4000/api/listings', {
            method: 'POST',
            body: JSON.stringify(listing),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok) {
            setTitle('')
            setPrice('')
            setDescription('')
            setError(null)
            console.log('New listing added!')
            dispatch({type: 'CREATE_LISTING', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Make a new listing</h3>
            <label>Name of Object:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Price(in $):</label>
            <input
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button>Add Listing</button>
            {error && <div className="error">{error}</div> }
        </form>
    )
}

export default ListingForm