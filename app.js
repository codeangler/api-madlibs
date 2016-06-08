angular.module('MadLibApp', [])
  .controller('MadLibController', madCtrl)
  
  madCtrl.$inject = ['$http'];
  
  function madCtrl($http) {
    var madCtrl = this;

// ####################  function generate random persons
    madCtrl.peopleArr = [];
    madCtrl.person = function(i) {
      while ( i > 0){
        var ranPerson = Math.floor(Math.random()*87)
        $http.get('http://swapi.co/api/people/' + ranPerson)
         .then(function(response){
            madCtrl.space = madCtrl.peopleArr.push(response.data.name);
            
          }, function(error) {
              console.error(error)
          })

         i--;
      }
    }
    madCtrl.person(3)
    console.log(madCtrl.peopleArr)

// ####################  function generate random starship
    madCtrl.shipArr = [];
    madCtrl.ship = function(i) {
      while ( i > 0){
        var ranShip = Math.floor(Math.random()*37)
        $http.get('http://swapi.co/api/starships/' + ranShip)
         .then(function(response){
            madCtrl.space = madCtrl.shipArr.push(response.data.name);
          }, function(error) {
              console.error(error)
          })

         i--;
      }
    }
    madCtrl.ship(1)
    console.log(madCtrl.shipArr)

// ####################  function generate random planet
    madCtrl.planetArr = [];
    madCtrl.planet = function(i) {
      while ( i > 0){
        var ranPlanet = Math.floor(Math.random()*22)
        $http.get('http://swapi.co/api/planets/' + ranPlanet)
         .then(function(response){
            madCtrl.space = madCtrl.planetArr.push(response.data.name);
            
          }, function(error) {
              console.error(error);
          })

         i--;
      }
    }
    madCtrl.planet(3)
    console.log(madCtrl.planetArr)

  }