function City(id, x, y){
  this._id = id;
  this._x = x;
  this._y = y;
};

City.prototype.getId = function () {
  return this._id;
};

City.prototype.getX = function () {
  return this._x;
};

City.prototype.getY = function () {
  return this._y;
};
