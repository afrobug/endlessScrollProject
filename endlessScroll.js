const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

const count = 10;
const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;


function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_blank");

        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt", photo.alt_description);
        img.setAttribute("title", photo.alt_description);

        item.append(img);

        imageContainer.append(item);
    });
}


async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

getPhotos();