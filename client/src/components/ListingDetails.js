import { useListingsContext } from "../hooks/useListingsContext"

const ListingDetails = ({ listing }) => {
    const { dispatch } = useListingsContext() 

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/listings/' + listing._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_LISTING', payload: json})
        }
    } 

    return(
        <div className="listing-details">
            <h4>{listing.title}</h4>
            <p><strong>Price ($): </strong>{listing.price}</p>
            <p><strong>Description: </strong>{listing.description}</p>
            <p>{listing.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default ListingDetails