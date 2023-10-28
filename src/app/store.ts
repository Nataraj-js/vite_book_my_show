import { applyMiddleware, combineReducers, compose, configureStore, createStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/movies.slice";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

/* const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({movies: moviesSlice.reducer}); */
/* 
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
 */

export const store = configureStore({
    devTools: true,
    reducer: {
        movies: moviesSlice.reducer
    }
});