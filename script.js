const getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

const getDistance = function (event, target) {
    const diffX = event.offsetX - target.x;
    const diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};


const getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 60) {
        return "Подпикает";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 120) {
        return "Прохладно";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else {
        return "Замерзнешь!";
    }
};


const width = 600;
const height = 600;
let tries = 30;
let clicks = 0;
const target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};


$("#map").click(function (event) {
    clicks++;
    tries--;
    const distance = getDistance(event, target);

    const distanceHint = getDistanceHint(distance);

    $("#distance").text(distanceHint);
    $("#tries").text(tries);


    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
        window.location.reload();
    } else if (clicks > 29) {
        alert("Игра оконченна. Попытки закончились!");
        window.location.reload();
    }
});
