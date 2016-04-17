
var renderer;
var solution;
var label;
window.onload = function(e){
  init();

  document.getElementById("start-annealing").onclick = function(){
    annealing(10, 0.001);
  };
  document.getElementById("refresh-candidate").onclick = refresh;
  label = document.getElementById('energy');
};

function refresh(){
  renderer.canvas.width = renderer.canvas.width;
  renderer.map = solution.getPath();
  renderer.draw();
  console.log("refreshed");
};

function init(){
  renderer = new Renderer("map");
  var citiesAmount = Math.floor(Math.random()*98) + 1;

  var map = [];
  for(var i = 0; i < citiesAmount; i++){
    map[i] = new City(i, Math.floor(Math.random()*(renderer.canvas.width + 2 )) - 1, Math.floor(Math.random()*(renderer.canvas.height + 2) - 1));
  }
  renderer.map = map;
  renderer.path = map;
  renderer.draw();
  solution = new Solution(map);
}

function annealing(initialTemperature, endTemperature){
  var currentSolution = solution;
  var currentEnergy = currentSolution.getEnergy();
  var temperature = initialTemperature;
  var iteration = 0;
  display({
    "Energy": currentEnergy,
    "Temperature": temperature,
    "Iteration": iteration
  });
  while(temperature > endTemperature && iteration < 1000000){
    var candidateSolution = (new Solution(currentSolution.getPath().slice())).refresh();
    var candidateEnergy = candidateSolution.getEnergy();
    if(candidateEnergy < currentEnergy){
      currentSolution = candidateSolution;
      currentEnergy = candidateEnergy;
    } else {
      var p = getTransitionProbability(candidateEnergy - currentEnergy, temperature)
      if(isTransition(p)){
        currentSolution = candidateSolution;
        currentEnergy = candidateEnergy;
        candidateEnergy = null;
      }
    }
    if(iteration % 1000 == 0)
      temperature = decreaseTemperature(temperature);
    iteration++;
  }
  display({
    "Solution": "==========",
    "Energy": currentEnergy,
    "Temperature": temperature,
    "Iteration": iteration
  });

  solution = currentSolution;

  refresh();
}

function getTransitionProbability(dE, temperature)
{
  return Math.exp(-dE/temperature);
}

function isTransition(probability){
  var p = Math.random();
  if(p <= probability){
    return true;
  } else {
    return false;
  }
}

function decreaseTemperature(temperature){
  return temperature*0.99;
}

function display(data){
  for(var i in data){
    label.innerHTML += `${i}: ${data[i]}<br>`;
  }
}