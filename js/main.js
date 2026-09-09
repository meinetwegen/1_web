document.addEventListener("DOMContentLoaded", () => {
    const angelImage = document.getElementById("angel");
    if (angelImage) {
        angelImage.addEventListener("click", () => {
            if (angelImage.src.includes("angel_lowered.jpg")) {
                angelImage.src = "images/angel_raised.jpg";
            } else {
                angelImage.src = "images/angel_lowered.jpg";
            }
        });
    }
});