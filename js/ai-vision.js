const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg"
];

const img =
    document.getElementById("random-photo");

const photoIndex =
    document.getElementById("photo-index");

function changePhoto() {

    const random =
        Math.floor(
            Math.random() * photos.length
        );

    img.style.opacity = "0";

    setTimeout(() => {

        img.src =
            `Anh/${photos[random]}`;

        photoIndex.textContent =
            `Ảnh ${String(random + 1).padStart(2, "0")}`;

        img.style.opacity = "1";

    }, 300);

}

window.addEventListener("load", () => {

    changePhoto();

    setInterval(
        changePhoto,
        3000
    );

});