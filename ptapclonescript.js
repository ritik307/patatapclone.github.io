var circleArray=[];
function onKeyDown(event){
    console.log("key pressed");
    var max=new Point(view.size.width,view.size.height);
    var cordinates=Point.random();
    var newCircle=new Path.Circle(max*cordinates,500);
    newCircle.fillColor = new Color(Math.random(), Math.random(), Math.random()); 
    circleArray.push(newCircle);
     console.log(newCircle);
}
function onFrame(){
    for(var i=0;i<circleArray.length;i++){
        console.log(circleArray[i]);
        circleArray[i].fillColor.hue += 1;
        circleArray[i].scale(0.9);
    }
}