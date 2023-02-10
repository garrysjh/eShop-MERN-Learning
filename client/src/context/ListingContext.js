import { createContext, useReducer } from 'react'
//make createcontext component
export const ListingContext = createContext()

export const listingsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LISTINGS':
            return {
                listings: action.payload
            }
        case 'CREATE_LISTING':
            return {
                listings: [action.payload, ...state.listings]
            }
        case 'DELETE_LISTING':
            return {
                listings: state.listings.filter(l => l._id !== action.payload._id)
            }
        default:
            return state
    }
}

//make provider function
export const ListingContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(listingsReducer, {
        listings: null
    })
//to wrap the app with the provider that returns the provider of the component we created
    return (
        <ListingContext.Provider value={{...state, dispatch}}>
            { children }
        </ListingContext.Provider>
    )
}