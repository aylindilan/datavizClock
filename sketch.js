
function setup() {
	createCanvas(windowWidth, windowHeight);


}

function draw() {
	background(220);
	let c1 = color(255);
	let c2 = color('lightblue');

	for(let y=0; y<height; y++){
		let c = lerpColor(c1, c2, y/height);
		stroke(c);
		line(0, y, width, y);
	}

	
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);

	let s = second();
	let m = minute();
	let h = hour();

	
	push();
		translate(width/4, height/2);
		noStroke();
		fill(128, 83, 156);
		for (let i = 0; i < h; i ++) {
			ellipse(0, 80, 10, 100);
			rotate(PI/11.5);
		}
		fill(255, 223, 49);
		ellipse(0, 0, 55, 55);
	pop();


	push();
		translate(width/2,height/2);
		noStroke();
		fill(90, 82, 158);
		for (let i = 0; i < m; i ++) {
		console.log(m);
		ellipse(0, 80, 5, 100);
		rotate(PI/29.5);
		}
		fill(255, 223, 49);
		ellipse(0, 0, 55, 55);
	pop();

	push();
		translate(3*width/4,height/2);
		noStroke();
		fill(77, 110, 177);
		for (let i = 0; i < s; i ++) {
		ellipse(0, 80, 5, 100);
		rotate(PI/29.5);
		}
		fill(255, 223, 49);
		ellipse(0, 0, 55, 55);
	pop();

	
	rectMode(CENTER);
	push();
		translate(width/4, height/4*3);
		noStroke();
		fill(0, 210, 0);
		rect(0, 0, 10, height/8);
		fill(0, 210, 0);
		ellipse(-5, -25, 40, 20);
		ellipse(5, -25, 40, 20);
	pop();

	push();
		translate(width/2,height/4*3);
		noStroke();
		fill(0, 210, 0);
		rect(0, 0, 10, height/8);
		ellipse(-5, -25, 40, 20);
		ellipse(5, -25, 40, 20);
  	pop();

	push();
	  translate(3*width/4,height/4*3);
	  noStroke();
	  fill(0, 210, 0);
	  rect(0, 0, 10, height/8);
	  ellipse(-5, -25, 40, 20);
	  ellipse(5, -25, 40, 20);
	pop();	
	




	
}
