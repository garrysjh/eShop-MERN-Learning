const ListingDetails = ({ listing }) => {
    return(
        <div className="listing-details">
            <h4>{listing.title}</h4>
            <p><strong>Price ($): </strong>{listing.price}</p>
            <p><strong>Description: </strong>{listing.description}</p>
            <p>{listing.createdAt}</p>
        </div>
    )
}

export default ListingDetails