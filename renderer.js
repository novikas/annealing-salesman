function Renderer(canvasId) {

  this.canvas = document.getElementById(canvasId);

  this.map = [];
  this.path = [];

  this.draw = function(){
    var context = this.canvas.getContext("2d");
    renderer.canvas.width = renderer.canvas.width;
    context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    context.moveTo(this.map[0].getX(), this.map[0].getY());
    for(var index in this.map) {
      context.strokeRect(this.map[index].getX() - 2.5, this.map[index].getY() - 2.5, 5, 5);
      context.lineTo(this.map[index].getX(), this.map[index].getY());
    }
    context.fillRect(this.map[0].getX() - 2.5, this.map[0].getY() - 2.5, 5, 5);
    context.lineTo(this.map[0].getX(), this.map[0].getY());
    //context.strokeStyle("#eee");
    context.stroke();
  };


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
