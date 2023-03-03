const apiKey = "6MEHfoXaFzCyYoE4t5uX04OcEuMjqP1YQpnLVZfBpOA";
const apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=flowers`; //get imgs of "flowers"

const fetchImages = async () => {
    const response = await axios.get(apiUrl);
    const images = response.data.results;
    return images;
}

const displayImages = async () => {
    const images = await fetchImages();
    const imageContainer = document.querySelector("#js-select-bgimg");

    imageContainer.innerHTML =
    `
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[0].urls.regular}" alt="item">
            </a>
        </li>
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[1].urls.regular}" alt="item">
            </a>
        </li>
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[2].urls.regular}" alt="item">
            </a>
        </li>
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[3].urls.regular}" alt="item">
            </a>
        </li>
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[5].urls.regular}" alt="item">
            </a>
        </li>
        <li class="select-bgimg-item">
            <a href="">
                <img class="bgimg-item-panel" src="${images[6].urls.regular}" alt="item">
            </a>
        </li>
    `;
}

displayImages();