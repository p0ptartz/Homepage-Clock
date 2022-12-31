var hourEl = document.getElementById("hour")
var minuteEl = document.getElementById("minute")
var secondEl = document.getElementById("second")
var amPmEl = document.getElementById("am-pm")


// LIGHT MODE DARK MODE TOGGLE BY SWITCHING CSS FILES

document.querySelector(".dark-mode").addEventListener("click", function () {
    var css = document.getElementById("css-file");
    var btn = document.querySelector(".dark-mode");

    if (btn.textContent == "D") {
        css.setAttribute("href", "dark.css")
        btn.textContent = "L"
    }
    else {
        css.setAttribute("href", "styles.css")
        btn.textContent = "D"
    }
})


// create function to run and update clock

function runClock() {

    // need syntax for grabbing hours,minutes,seconds
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // variable for storing AM/PM to hardcode then change inner text later

    let ampm = "AM";

    // if statement for setting AM/PM / conversion

    if (h > 12) {
        h = h - 12;
        ampm = "PM"
    }

    //  if statement for adding a 0 before hour 

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    // set inner text for h, m, s

    hourEl.innerText = h;
    minuteEl.innerHTML = m;
    secondEl.innerText = s;
    amPmEl.innerText = ampm;

    // set timeout to update every one second (1000)

    setTimeout(function () { runClock() }, 1000)

}

runClock();
