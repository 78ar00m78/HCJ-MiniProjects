const switchLayer = document.body.querySelector(".switch");
const singIn = document.body.querySelector(".sign-in");
const singUp = document.body.querySelector(".sign-up");
const button = document.body.querySelector(".btn");
const title = document.body.querySelector(".title");
const text = document.body.querySelector(".text");

const switchLayerForwardMovingStyles = [
    "transition-property: transform, border-top-left-radius, border-top-right-radius, border-bottom-left-radius, border-bottom-right-radius;",
    "background-color: crimson;",
    "transition-duration: 500ms;",
    "transform: translateX(500px);",
    "border-top-left-radius: 0;",
    "border-bottom-left-radius: 0;",
    "border-bottom-right-radius: 30px;",
    "border-top-right-radius: 30px;",
];

const switchLayerBackwardMovingStyles = [
    "transition-property: transform;",
    "transition-duration: 500ms;",
    "transform: translateX(0);",
];

button.addEventListener("click", () => {
    if (switchLayer.getAttribute("data-is-switched") === "true") {
        switchLayer.setAttribute("data-is-switched", "false");
        switchLayer.setAttribute(
            "style",
            switchLayerForwardMovingStyles.join(" ")
        );
        button.innerHTML = "Sign Up";
        button.style.backgroundColor = "crimson";
        title.innerHTML = "Sign Up";
        text.innerHTML = "Sign up if you don't have an account.";
        singUp.setAttribute(
            "style",
            "transition-property: transform; transition-duration: 500ms; transform: translateX(-500px) scale(0) rotate(720deg);"
        );

        singIn.setAttribute(
            "style",
            "transition-property: transform; transition-duration: 500ms; transform: translateX(0px) scale(1) rotate(720deg);"
        );

        button.style.backgroundColor = "crimson";
    } else {
        button.style.backgroundColor = "cadetblue";
        singUp.setAttribute(
            "style",
            "transition-property: transform; transition-duration: 500ms; transform: translateX(0px) scale(1) rotate(0deg); z-index: 1;"
        );

        singIn.setAttribute(
            "style",
            "transition-property: transform; transition-duration: 500ms; transform: translateX(500px) scale(0) rotate(-720deg);"
        );

        switchLayer.setAttribute("data-is-switched", "true");
        switchLayer.setAttribute(
            "style",
            switchLayerBackwardMovingStyles.join(" ")
        );
        button.innerHTML = "Sign In";
        title.innerHTML = "Sign In";
        text.innerHTML = "Sign in if you already have an account";
    }
});
