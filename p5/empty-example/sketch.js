

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  for (var i =0; i <= 2000; i += 1){
    var gray = int(random(0, 102));
    var randi = random(25, 1000);
    fill(255-gray);
    ellipse(i/2, randi, 20, 20)
    console.log(randi)
  }
  console.log("string")
  noLoop();
  }