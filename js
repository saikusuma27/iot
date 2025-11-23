let autoMode = true;
let pumpState = "OFF";

function simulateMoisture() {
    let moisture = Math.floor(Math.random() * (100 - 30) + 30); // range 30–100
    document.getElementById("moistureValue").innerText = moisture + " %";

    if (autoMode) {
        if (moisture < 50) {
            pumpState = "ON";
        } else {
            pumpState = "OFF";
        }
        document.getElementById("pumpStatus").innerText = pumpState;
    }
}

// manual control
function manualPump(state) {
    pumpState = state;
    autoMode = false;
    document.getElementById("pumpStatus").innerText = pumpState;
    document.getElementById("modeText").innerText = "Current Mode: Manual";
}

// auto/manual toggle
function toggleMode() {
    autoMode = !autoMode;

    if (autoMode) {
        document.getElementById("modeText").innerText = "Current Mode: Automatic";
    } else {
        document.getElementById("modeText").innerText = "Current Mode: Manual";
    }
}

// run moisture simulation every 2 seconds
setInterval(simulateMoisture, 2000);
