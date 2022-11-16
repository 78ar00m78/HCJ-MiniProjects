const div = document.body.querySelector(".clock");

setInterval(() => {
    const clock = new Date();
    let hour = clock.getHours();
    let minute = clock.getMinutes();
    let second = clock.getSeconds();

    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    div.innerText = `${hour}:${minute}:${second}`;
}, 1000);
