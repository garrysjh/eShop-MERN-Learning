import { useEffect, useState } from 'react'

//components
import ListingDetails from '../components/ListingDetails'
import ListingForm from '../components/ListingForm'


const Home = () => {
    const [listings, setListings] = useState(null)

    useEffect(() =>{
        const fetchListings = async () => {
            const response = await fetch('http://localhost:4000/api/listings')
            //parse and become array of listings
            const json = await response.json()
            if (response.ok){
                setListings(json)
            }
        }

        fetchListings()
    }, [])

    return (
        <div className="home">
            <div className="listings">
              {listings && listings.map((listing)=> (
                <ListingDetails key={listing._id} listing={listing}/>
              ))}  
            </div>
            <ListingForm/>
        </div>
    )
}

export default Home;