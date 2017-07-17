function setup() {
   // code block
   createCanvas(1000, 800)
}

function draw () {
    //body
    stroke(46,81,39,[1]);
    fill(58, 99, 49);
   ellipse (500, 500, 300, 400);
   
   // head
   ellipse (500, 250, 200, 250);
   strokeWeight(6);
   
   //eyes
   noStroke();
   ellipse (420, 160, 60, 60);
   ellipse (580, 160, 60, 60);
   fill("white")
   ellipse (420, 160, 40, 40);
   ellipse (580, 160, 40,40);
   fill ("black")
   ellipse (420, 160, 20, 20);
   ellipse (580, 160, 20,20);
   
   //nostrils
   ellipse (480, 340, 10, 20);
   ellipse (520, 340, 10, 20)
   }
   
   //teeth
  
  
   
   
   
   //nose
  rect(800, 100, 30, 55, 20);
 