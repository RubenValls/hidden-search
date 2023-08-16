const searchBtn = document.querySelector("#search-btn")
const inputSearch = document.querySelector("#input")

const openInpunt = () => {
    inputSearch.style.display = inputSearch.style.display === 'none' ? '' : 'none';
}

searchBtn.addEventListener("click", openInpunt)