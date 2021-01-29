var button;
var colorPalette = ["red", "orange", "yellow", "green", "cyan", "blue", "magenta", "brown", "white", "black"];
var darkMode = false;
var paintColor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
}


function draw() {
    if (paintColor != null && mouseIsPressed) {
        strokeWeight(10);
        stroke(paintColor);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    createPalette();
}

function mousePressed() {
    if (mouseX <= 45) {
        if (mouseY <= 45) {
            paintColor = colorPalette[0];
        }
        else if (mouseY <= 90) {
            paintColor = colorPalette[1];
        }
        else if (mouseY <= 135) {
            paintColor = colorPalette[2];
        }
        else if (mouseY <= 180) {
            paintColor = colorPalette[3];
        }
        else if (mouseY <= 225) {
            paintColor = colorPalette[4];
        }
        else if (mouseY <= 270) {
            paintColor = colorPalette[5];
        }
        else if (mouseY <= 315) {
            paintColor = colorPalette[6];
        }
        else if (mouseY <= 360) {
            paintColor = colorPalette[7];
        }
        else if (mouseY <= 405) {
            paintColor = colorPalette[8];
        }
        else if (mouseY <= 450) {
            paintColor = colorPalette[9];
        }
    }
    else {
        draw();
    }
}

//creates the palette with a button
function createPalette() {
    for (let i = 0; i < colorPalette.length; i++) {
        noStroke();
        fill(colorPalette[i]);
        rect(0, (45 * i), 45, 45);
        //palettes.push(new Palette(0, (32 * i), colorPalette[i]));
        button = createButton('Dark');
        button.position(8, 490);
        button.mousePressed(toggleDarkMode);
    }
}

//turns on/off dark mode canvas
function toggleDarkMode() {
    if (!darkMode) {
        background(0);
        button.html('Dark');
        darkMode = true;
    }
    else {
        background(255);
        button.html('Light');
        darkMode = false;
    }
}