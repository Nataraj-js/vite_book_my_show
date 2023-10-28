export function MoviesDropdown() {
    const selectElem = document.createElement('select');
    const update = (movies: any) => {
        selectElem.innerHTML = "";
        movies.forEach((movie: any) => {
            const optionElem = document.createElement('option');
            optionElem.value = movie.movieid;
            optionElem.textContent = movie.name;
            selectElem.appendChild(optionElem);
        })
    }
    const render = () => {
        return selectElem;
    }
    return { render, update };
}