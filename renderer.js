function Renderer(canvasId) {

  this.canvas = document.getElementById(canvasId);

  this.map = [];
  this.path = [];

  this.draw = function(){
    var context = this.canvas.getContext("2d");
    renderer.canvas.width = renderer.canvas.width;
    context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    context.moveTo(this.map[0].getX(), this.map[0].getY());
    var prevX = this.map[0].getX();
    var prevY = this.map[0].getY();
    for(var index in this.map) {
      var x = this.map[index].getX();
      var y = this.map[index].getY();
      context.strokeRect(x - 2.5, y - 2.5, 5, 5);
      this.drawArrow(x, y, x - prevX, y - prevY, context);
      prevX = x; prevY = y;
    }
    context.fillRect(this.map[0].getX() - 5, this.map[0].getY() - 5, 10, 10);
    context.lineTo(this.map[0].getX(), this.map[0].getY());
    //context.strokeStyle("#eee");
    context.stroke();
  };

  this.drawArrow = function(x, y, dx, dy, context){
    var headlen = 8;
    var angle = Math.atan2(dy, dx);
    context.lineTo(x, y);
    context.lineTo(x-headlen*Math.cos(angle-Math.PI/6),y-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(x, y);
    context.lineTo(x-headlen*Math.cos(angle+Math.PI/6),y-headlen*Math.sin(angle+Math.PI/6));
    context.moveTo(x, y);
  }

  this.findCityById = function(id){
    for(var i in this.map){
      console.log(this.map[i]);
      if(this.map[i].id === id){
        return this.map[i];
      }
    }
    return -1;
  }
};
