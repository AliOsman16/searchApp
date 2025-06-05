const formWrapper = document.querySelector('.form-wrapper');
const searchForm = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const buttonWrapper = document.querySelector('.button-wrapper');
const searchButton = document.querySelector('#searchButton');
const clearButton = document.querySelector('#clearButton');
const imagelistWrapper = document.querySelector(".imagelist-wrapper");
const info = document.querySelector(".info-section");


runEventListeners();

function runEventListeners(){
    searchForm.addEventListener("submit", search);
    clearButton.addEventListener("click", clear);
}


function search(e) {
    info.style.display = "none";
    imagelistWrapper.innerHTML = "";
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}&per_page=30`,{
        method: 'GET',
        headers: {
            Authorization: "Client-ID YOUR_ACCESS_KEY" // Buraya kendi Unsplash API erişim anahtarınızı ekleyin
        }
    })
    .then(response => response.json())
    .then(data => {
        Array.from(data.results).forEach((image) =>{
            addImageToUI(image.urls.small,image.urls.full);
        })
    })
    .catch(error => console.error('Error fetching images:', error));

    e.preventDefault();
}

function addImageToUI(smallUrlrl,fullUrl){
    const div = document.createElement("div");
    div.className = "card ";
   
    const img = document.createElement("img");
    img.className = "img";
    img.setAttribute("src",smallUrlrl);
    img.addEventListener("click", function() {
        showImage(fullUrl);
    });

    div.appendChild(img);
    imagelistWrapper.appendChild(div);
}

function clear(){
    info.style.display = "block"
    searchInput.value = "";
    imagelistWrapper.innerHTML = "";
}

function showImage(url) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.style.display = "none";
    modal.style.display = "flex";

    modalImg.onload = function() {
        modalImg.style.display = "block";
    };
    modalImg.src = url;
    modal.style.display = "flex";
}


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const closeBtn = document.querySelector(".close-modal");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});