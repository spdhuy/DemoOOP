/**
 * Created by huy on 6/23/17.
 */
function Rectangle(width,height,color){
    this.width =width;
    this.height = height;
    this.color = color;
    this.draw = function(xPosition,yPosition){
        document.write("<div style='position:absolute;background-color:"+this.color+";height:"+this.height+"px;width:"+this.width+"px; left:"+xPosition+"px;top:"+yPosition+"px;'></div>");
    };
}
function Circle(radius,color){
    this.radius =radius;
    this.color =color;
    this.draw = function(xPosition,yPosition){
        document.write("<div style='position:absolute;border-radius:50%;background-color:"+this.color+";height:"+this.radius+"px;width:"+this.radius+"px; left:"+xPosition+"px;top:"+yPosition+"px;'></div>");
    };
}
var r1 = new Rectangle(200,150,'black');
r1.draw(100,200);
var c1 = new Circle(100,'yellow');
c1.draw(0,0);
function triangle(width,height,color){
    this.width =width;
    this.height = height;
    this.color = color;
    this.draw = function(xPosition,yPosition){
        document.write("<div style='position:absolute;height:0px;width:0px;border-left:"+this.height+"px solid transparent;border-right:"+this.height+"px solid transparent; border-bottom:"+this.width+"px solid "+this.color+";left:"+xPosition+"px;top:"+yPosition+"px;'></div>");
    };
}
var t1 = new triangle(100,100,'red');
t1.draw(100,100);