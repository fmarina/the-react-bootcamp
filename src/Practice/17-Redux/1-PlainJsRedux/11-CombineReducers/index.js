import store from './redux/index';
import {changeCount} from './redux/count';
import {addFavoriteThing, removeFavoriteThing} from './redux/favoriteThings';
import {
    setYouTubeTitle, 
    incrementViewCount,
    upvoteVideo,
    downvoteVideo
} from './redux/youtubeVideo';

store.dispatch(changeCount(42));

store.dispatch(addFavoriteThing("A book"));
store.dispatch(addFavoriteThing("Walk with a dog"));
store.dispatch(removeFavoriteThing("walk with a dog"));

store.dispatch(setYouTubeTitle("The react bootcamp video"));
