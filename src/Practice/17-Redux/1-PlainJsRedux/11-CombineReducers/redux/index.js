const redux = require('redux');
const {combineReducers, createStore} = redux;
import countReducer from './count';
import favoriteThingsReducer from './favoriteThings';
import youtubeVideoReducer from './youtubeVideo';
import userReducer from './user';

const rootReducer = combineReducers({
    count: countReducer, 
    favoriteThings: favoriteThingsReducer, 
    youtubeVideo: youtubeVideoReducer,
    user: userReducer
});

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState())
})

export default store;
