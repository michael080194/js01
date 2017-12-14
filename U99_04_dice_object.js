function myDice(){
   this.x=100;
   this.y=200;
   this.num=3;
   this.play = function(){
       var n = Math.random();
       n  = Math.floor(n * 6)+1;
       this.num=n;
   }
}