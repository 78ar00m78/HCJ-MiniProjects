const innerCircle = document.body.querySelector(".inner-circle");
const img = innerCircle.firstElementChild;
const wrapper = document.body.querySelector(".wrapper");
const topWrapper = document.body.querySelector(".top-wrapper");
const bottomWrapper = document.body.querySelector(".bottom-wrapper");
const socialMedia = document.body.querySelectorAll(".social-media");
const span = document.body.querySelectorAll("span");

innerCircle.addEventListener("click", () => {
    const commonStyles =
        "transition-property: width, transform, margin-left, background-color; transition-duration: 500ms;";

    if (img.style.transform === "rotate(180deg)") {
        img.style = commonStyles + "transform: rotate(0deg);";
    } else {
        img.style = commonStyles + "transform: rotate(180deg);";
    }

    if (wrapper.style.width === "420px") {
        wrapper.style = commonStyles + "width: 120px;";
    } else {
        wrapper.style = commonStyles + "width: 420px;";
    }

    if (topWrapper.style.width === "420px") {
        topWrapper.style = commonStyles + "width: 120px;";
    } else {
        topWrapper.style = commonStyles + "width: 420px;";
    }

    if (bottomWrapper.style.width === "420px") {
        bottomWrapper.style = commonStyles + "width: 120px;";
    } else {
        bottomWrapper.style = commonStyles + "width: 420px;";
    }

    for (const child of socialMedia) {
        if (child.style.width === "390px") {
            child.style = commonStyles + "width: 90px;";
        } else {
            child.style = commonStyles + "width: 390px;";
        }
    }

    for (const child of span) {
        if (child.style.marginLeft === "30px") {
            child.style = commonStyles + "margin-left: -120px;";
        } else {
            child.style = commonStyles + "margin-left: 30px;";
        }
    }
});
