import {combineReducers} from "redux";
import categories from "./categories";
import branches from "./branches";
import offers from './offers';
import slides from './slides';

export default combineReducers({
    categories,
    branches,
    offers,
    slides,
});
