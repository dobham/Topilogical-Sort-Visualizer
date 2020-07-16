function setup() {
    createCanvas(displayWidth, displayHeight);
    var nodeCount = 10

}

function draw() {
    background(10);
    ellipse(width / 2, height / 2, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}