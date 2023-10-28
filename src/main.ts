import { store } from "./app/store";
import { MoviesDropdown } from "./components/MoviesDropDown";
import { addMovie, addMovies, selectAll, selectEntities, updateMovie } from "./features/movies/movies.slice";

const app = document.getElementById('app');
const dropDown = MoviesDropdown();
app?.appendChild(dropDown.render());
store.subscribe(() => {
  //console.log(store.getState());
  const rootState = store.getState();
  const movies = selectAll(rootState);
  dropDown.update(movies);
  console.log(movies);
})
store.dispatch(addMovie({
  movieid: 100,
  name: "Leo",
  mainActor: "Vijay"
}));
 store.dispatch(addMovie({
  movieid: 200,
  name: "Beast",
  mainActor: "Vijay"
}));
/*store.dispatch(addMovies([{
  movieid: 300,
  name: "Jailer",
  mainActor: "Rajnikanth"
},
{
  movieid: 400,
  name: "Kabali",
  mainActor: "Rajnikanth"
}])); */
/* store.dispatch(updateMovie({id: 300, changes: {mainActor: "Shivajirao",name: "Shivaji"}})); */