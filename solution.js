function Solution(map){
  if(!(map[0] instanceof City)){
    console.error("Solution constructor accepts array of cities!");
  }

  this._path = map;
}

Solution.prototype.getPath = function(){
  return this._path;
}

Solution.prototype.getEnergy = function(){
  var energy = 0;
  var i;
  for(i = 0; i < this._path.length - 1; i++){
    energy +=  Math.sqrt(Math.pow(this._path[i].getX() - this._path[i + 1].getX(), 2) + Math.pow(this._path[i].getY() - this._path[i + 1].getY(), 2));
  }
  energy +=  Math.sqrt(Math.pow(this._path[i].getX() - this._path[0].getX(), 2) + Math.pow(this._path[i].getY() - this._path[0].getY(), 2));
  return energy;
}

Solution.prototype.refresh = function(){
  var fromIndex = Math.floor(Math.random()*(this._path.length));
  while(fromIndex === 0){
    var fromIndex = Math.floor(Math.random()*(this._path.length));
  }

  var toIndex = Math.floor(Math.random()*(this._path.length));
  while(toIndex === fromIndex || toIndex === 0){
    var toIndex = Math.floor(Math.random()*(this._path.length));
  }

  var buffer = this._path[fromIndex];
  this._path[fromIndex] = this._path[toIndex];
  this._path[toIndex] = buffer;
  return this;
}
