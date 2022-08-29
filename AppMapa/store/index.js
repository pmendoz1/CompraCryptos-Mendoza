import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducers
import PlaceReducer from './reducers/place.reducer';

const RootReducer = combineReducers({
    places: PlaceReducer
})

export default createStore(RootReducer, applyMiddleware(thunk))