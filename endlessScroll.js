const count = 10;
const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(element, attributes) {

}

function displayPhotos() {
    photosArray.forEach((photo) => {
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: "_blank",
        });
        item.setAttribute("target", "_blank");
    })
}


async function getPhotos() {
    try {
        const response = await fetch(apiUrl);

    } catch (error) {
        console.log(error);
    }
}

getPhotos();