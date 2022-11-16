const share = document.body.querySelector(".share");
const app = document.body.querySelectorAll(".social-media");

share.addEventListener("click", () => {
    if (
        share.firstElementChild.getAttribute("src") ===
        "../../ASSETS/IMAGES/PNG/share.png"
    ) {
        share.firstElementChild.setAttribute(
            "src",
            "../../ASSETS/IMAGES/PNG/multiply.png"
        );
    } else {
        share.firstElementChild.setAttribute(
            "src",
            "../../ASSETS/IMAGES/PNG/share.png"
        );
    }
});

app[0].style = "transform:rotate(-45deg);";
app[1].style = "transform:rotate(-45deg);";
app[2].style = "transform:rotate(45deg);";
app[3].style = "transform:rotate(45deg);";

share.addEventListener("click", () => {
    const commonStyles = [
        "cursor: pointer;",
        "transition-property: transform;",
        "transition-duration: 200ms;",
        "background-color: white;",
        "border: 2px solid royalblue;",
    ];

    const firstClickUncommonStyles = [
        [
            "transition-delay: 200ms; transform: rotate(-45deg) translateX(150px);",
        ],
        [
            "transition-delay: 600ms; transform: rotate(-45deg) translateX(-150px);",
        ],
        [
            "transition-delay: 800ms; transform: rotate(45deg) translateX(-150px);",
        ],
        [
            "transition-delay: 400ms; transform: rotate(45deg) translateX(150px);",
        ],
        ["transition-delay: 300ms; transform: translateX(150px);"],
        ["transition-delay: 700ms; transform: translateX(-150px);"],
        ["transition-delay: 500ms; transform: translateY(150px);"],
        ["transition-delay: 100ms; transform: translateY(-150px);"],
    ];

    const secondClickUncommonStyles = [
        "transition-delay: 200ms; transform: rotate(-45deg) translateX(0);",
        "transition-delay: 600ms; transform: rotate(-45deg) translateX(0);",
        "transition-delay: 800ms; transform: rotate(45deg) translateX(0);",
        "transition-delay: 400ms; transform: rotate(45deg) translateX(0);",
        "transition-delay: 300ms; transform: translateX(0);",
        "transition-delay: 700ms; transform: translateX(0);",
        "transition-delay: 500ms; transform: translateX(0);",
        "transition-delay: 100ms; transform: translateX(0);",
    ];

    for (let i = 0; i < 8; i++) {
        if (app[i].getAttribute("data-status") === "0") {
            app[i].style = commonStyles
                .concat(firstClickUncommonStyles[i])
                .join("");
            app[i].setAttribute("data-status", "1");
        } else {
            firstClickUncommonStyles[i].pop();
            firstClickUncommonStyles[i].push(secondClickUncommonStyles[i]);
            app[i].style = commonStyles
                .concat(firstClickUncommonStyles[i])
                .join("");
            app[i].setAttribute("data-status", "0");
        }
    }
});
