var ChangeColor = function(obj2,width2,height2,color2){
  this.obj = obj2;
  this.width=width2;
  this.height=height2;
  this.color=color2;
  this.display=function(){
    this.obj.style.width=this.width;
    this.obj.style.height=this.height;
    this.obj.style.background=this.color;
  }
};