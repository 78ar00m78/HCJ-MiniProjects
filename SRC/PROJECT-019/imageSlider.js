const forward = document.body.querySelector(".forward");
const backward = document.body.querySelector(".backward");
const wrapper = document.body.querySelector(".wrapper");
const div = document.body.querySelectorAll(".div-wrapper div");

let x = 1;

forward.addEventListener("click", () => {
    if (x === 5) {
        x = 0;
    }

    if (x !== 0) {
        div[x - 1].setAttribute(
            "style",
            "background-color: rgba(255, 255, 255, 0.7);"
        );
        div[x].setAttribute("style", "background-color: white;");
    } else {
        div[0].setAttribute("style", "background-color: white;");
        div[4].setAttribute(
            "style",
            "background-color: rgba(255, 255, 255, 0.7);"
        );
    }

    wrapper.setAttribute(
        "style",
        `background-image: url("../../ASSETS/IMAGES/PNG/${++x}.png");`
    );
});

backward.addEventListener("click", () => {
    if (x === 1) {
        x = 6;
    }

    if (x === 6) {
        div[4].setAttribute("style", "background-color: white;");
        div[0].setAttribute(
            "style",
            "background-color: rgba(255, 255, 255, 0.7);"
        );
    } else {
        div[x - 1].setAttribute(
            "style",
            "background-color: rgba(255, 255, 255, 0.7);"
        );
        div[x - 2].setAttribute("style", "background-color: white;");
    }

    wrapper.setAttribute(
        "style",
        `background-image: url("../../ASSETS/IMAGES/PNG/${--x}.png");`
    );
});
