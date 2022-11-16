const span = document.body.querySelector("span");
const input = document.body.querySelector("input");
const div = document.body.querySelector(".number");
const tracker = document.querySelector(".tracker");

input.addEventListener("input", () => {
    const value = input.value;
    span.textContent = value;
    div.style.left = `${(444 / 99) * (value - 1) - 17}px`;
    tracker.style.width = `${(444 / 99) * (value - 1) + 8}px`;
    div.classList.add("show");
});

input.addEventListener("mouseup", () => {
    div.classList.remove("show");
});
