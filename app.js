angular.module('MadLibApp', [])
  .controller('MadLibController', madCtrl)
  
  madCtrl.$inject = ['$http'];
  
  function madCtrl($http) {
    var madCtrl = this;

// ####################  function generate random persons
    var ranPerson = Math.floor(Math.random()*87)
    madCtrl.peopleArr = [];
    madCtrl.person = function(i) {
      while ( i > 0){
        $http.get('http://swapi.co/api/people/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.peopleArr.push(response.data.name);
                console.log(madCtrl.peopleArr)

          }, function(error) {
              console.error(error)
          })

         i--;
      }
    }
    madCtrl.person(87)
// ####################  function generate random starship
    var ranShip = Math.floor(Math.random()*37)
    madCtrl.shipArr = [];
    madCtrl.ship = function(i) {
      while ( i > 0){
        $http.get('http://swapi.co/api/starships/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.shipArr.push(response.data.name);
          }, function(error) {
              console.error(error)
          })

         i--;
      }
    }
    madCtrl.ship(37)
    

// ####################  function generate random planet
    // var ranPlanet = Math.floor(Math.random()*37)
    madCtrl.planetArr = [];
    madCtrl.planet = function(i) {
      while ( i > 0){
        $http.get('http://swapi.co/api/planets/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.planetArr.push(response.data.name);
            console.log(madCtrl.planetArr)

          }, function(error) {
              console.error(error);
          })
        i--;

      }

    }
    madCtrl.planet(37)
    
  }