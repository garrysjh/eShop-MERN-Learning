import { ListingContext } from '../context/ListingContext'
import { useContext } from 'react'

export const useListingsContext = () => {
    const context = useContext(ListingContext)

    if(!context) {
        throw Error('useListingsContext must be used inside a ListingsContextProvider')
    }

    return context

}