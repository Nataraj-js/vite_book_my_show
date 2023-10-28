import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter({
    selectId: (movie: any) => movie.movieid
});
const moviesSlice = createSlice({
    name: "movies",
    //Data
    initialState: entityAdapter.getInitialState(),
    //Methods
    reducers: {
        addMovie: entityAdapter.addOne,
        addMovies: entityAdapter.addMany,
        updateMovie: entityAdapter.updateOne
    }
})
export const {addMovie,addMovies,updateMovie} = moviesSlice.actions
export const selectMovies = (rootState: any)=> rootState.movies;
export const {selectAll,selectEntities} = entityAdapter.getSelectors(selectMovies);
export const selectMovieById = (movieId: any) => {
    return createSelector(selectEntities,(dataInObj)=>{
        return dataInObj[movieId];
    });
}
export default moviesSlice;