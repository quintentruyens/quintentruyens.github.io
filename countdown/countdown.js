let timeElem = document.getElementById("time");
let startElem = document.getElementById("start");

function startTimer() {
    openFullscreen(document.documentElement);

    startElem.hidden = true;
    
    let endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + 3951);

    let interval = setInterval(() => {
        let now = new Date();

        let millisecondsLeft = endTime.getTime() - now.getTime();
        let secondsLeft = Math.floor(millisecondsLeft / 1000);

        if (secondsLeft < 0) {
            clearInterval(interval);
            timeElem.textContent = "0";
            timeElem.style.color = "red";
        } else {
            timeElem.textContent = secondsLeft.toString();
        }
    }, 100);
}

/* View in fullscreen */
function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen(elem) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}