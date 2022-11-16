const div = document.body.querySelectorAll(".btn");

const backgroundColors = [
    "crimson",
    "royalblue",
    "cadetblue",
    "coral",
    "deeppink",
];

div[0].firstElementChild.remove();

for (let i = 0; i < 5; i++) {
    div[i].addEventListener("click", () => {
        div[
            i
        ].style = `color: ${backgroundColors[i]}; border-bottom: 5px solid ${backgroundColors[i]};`;
        div[i].firstElementChild.remove();

        for (let j = 0; j < 5; j++) {
            if (!(i === j)) {
                div[j].style = "";
                div[j].innerHTML = `${div[j].innerText}<span></span>`;
            }
        }
    });
}

for (let i = 1; i <= 4; i++) {
    div[i].addEventListener("click", () => {
        div[0].style = "color: black; border-bottom: none;";
        div[0].innerHTML = "Home<span></span>";
    });
}
