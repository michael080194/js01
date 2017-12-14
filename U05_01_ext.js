var ChangeColor = function(){
  this.obj = {};
  this.width='';
  this.height='';
  this.color='';
  this.display=function(){
    this.obj.style.width=this.width;
    this.obj.style.height=this.height;
    this.obj.style.background=this.color;
  }
};