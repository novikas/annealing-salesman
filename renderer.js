function Renderer(solution) {

  this.map = solution.path;

  this.canvas = document.getElementById('map');

  this.draw = function(){
    var context = this.canvas.getContext("2d");
    context.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    //context.strokeStyle = "#eee";
    for(var index in this.map) {
      context.strokeRect(this.map[index].x - 2.5, this.map[index].y - 2.5, 5, 5);

      var nextCity = this.findCityById(this.map[index].next);
      if(nextCity === -1) {
        alert(`City with id ${this.map[index].next} not found!`);
        return;
      }
      context.moveTo(this.map[index].x, this.map[index].y);
      context.lineTo(nextCity.x, nextCity.y);
    }
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
