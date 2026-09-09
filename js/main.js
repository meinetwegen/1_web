document.addEventListener("DOMContentLoaded", () => {
    const angelImage = document.getElementById("angel");
    if (angelImage) {
        angelImage.addEventListener("click", () => {
            if (angelImage.src.includes("angel_lowered.png")) {
                angelImage.src = "images/angel_raised.png";
            } else {
                angelImage.src = "images/angel_lowered.png";
            }
        });
    }
});