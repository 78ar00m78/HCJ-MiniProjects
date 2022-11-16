const next = document.body.querySelector("button");

const div = [
    document.body.querySelector(".first"),
    document.body.querySelector(".second"),
    document.body.querySelector(".third"),
    document.body.querySelector(".fourth"),
    document.body.querySelector(".fifth"),
];

const circularShift = function (array, number) {
    for (let i = 0; i < number; i++) {
        array.unshift(array.pop());
    }
    return array;
};

let [index, step] = [0, 1];

const style = [
    "transition-property: transform; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); transition-duration: 400ms; transform: translate3d(350px, 0, -450px) rotateY(-45deg); z-index: -1;",
    "transition-property: transform; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); transition-duration: 400ms; transform: translate3d(0, 0, 0) rotateY(0); z-index: 0;",
    "transition-property: transform; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); transition-duration: 400ms; transform: translate3d(-350px, 0, -450px) rotateY(45deg); z-index: -1;",
    "transition-property: transform; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); transition-duration: 400ms; transform: translate3d(-450px, 0, -450px) rotateY(45deg); z-index: -2;",
    "transition-property: transform; transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); transition-duration: 400ms; transform: translate3d(450px, 0, -450px) rotateY(-45deg); z-index: -3;",
];

next.addEventListener("click", () => {
    switch (step) {
        case 1:
            for (const n of circularShift([0, 1, 2, 3, 4], 0)) {
                div[n].setAttribute("style", style[index]);
                index++;
            }

            [step, index] = [2, 0];
            break;
        case 2:
            for (const n of circularShift([0, 1, 2, 3, 4], 1)) {
                div[n].setAttribute("style", style[index]);
                index++;
            }

            [step, index] = [3, 0];
            break;
        case 3:
            for (const n of circularShift([0, 1, 2, 3, 4], 2)) {
                div[n].setAttribute("style", style[index]);
                index++;
            }

            [step, index] = [4, 0];
            break;
        case 4:
            for (const n of circularShift([0, 1, 2, 3, 4], 3)) {
                div[n].setAttribute("style", style[index]);
                index++;
            }

            [step, index] = [5, 0];
            break;
        case 5:
            for (const n of circularShift([0, 1, 2, 3, 4], 4)) {
                div[n].setAttribute("style", style[index]);
                index++;
            }

            [step, index] = [1, 0];
            break;
    }
});
