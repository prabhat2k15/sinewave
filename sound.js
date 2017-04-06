var m;
var historyX=[];
var historyY=[];
var pos=0;
function setup(){
  createCanvas(1100,1000);
  //background(150);
  m=new Path();
  frameRate(40);
}


 
//-----drawing---------------------------
function draw(){
    //  background(150);

      m.show();
      m.update();
     
      
      for(var i=0;i<=pos;i++) {
          ellipse(historyX[i],historyY[i],20,20);
      } 
} 



function Path(){
    this.x = 0;
    this.y = 0;
    this.theta=30;
    this.show=function(){
         ellipse( this.x, this.y,10,10);
         historyX[pos]=this.x;
         historyY[pos]=this.y;
         pos++;
         if(this.x>=width){
             this.x=0;
             this.y=0;
             this.theta=30;
             fill(random(0,255),random(0,255),random(0,255));
            
              pos=0;
         }
    };
    this.update=function(){
        // this.x=500*cos(this.theta);
        this.y=50*sin(2*180*0.1*this.x+this.theta)+500;//500*sin(this.theta);
        this.x=this.x+15;
        //  this.theta=this.theta+0.1;
    };
  
}

