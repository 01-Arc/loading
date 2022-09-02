var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");
setInterval(() => {
    div3.style.scale = "1.2";
    div3.style.backgroundColor = "#bc4749";
    setTimeout(() => {
        div2.style.scale = "1.2";
        div2.style.backgroundColor = "#eeef20";
    }, 500);
    setTimeout(() => {
        div1.style.scale = "1.2";
        div1.style.backgroundColor = "#52b788";
    }, 750);
    setTimeout(() => {
        div3.style.scale = "1";
        div3.style.backgroundColor = "#eeef20";
    }, 1000);
    setTimeout(() => {
        div2.style.scale = "1";
        div2.style.backgroundColor = "#52b788";
    }, 1250);
    setTimeout(() => {
        div1.style.scale = "1";
        div1.style.backgroundColor = "#bc4749";
    }, 1500);
}, 1750);