const searchBtn = document.querySelector("#search-btn")
const inputSearch = document.querySelector("#input")

const openInpunt = () => {
    console.log(inputSearch.style.width)
    inputSearch.style.width = inputSearch.style.width === '0px' ? '100%' : '0px';
    inputSearch.style.padding = inputSearch.style.padding === '0px' ? '20px' : '0px';
}

searchBtn.addEventListener("click", openInpunt)