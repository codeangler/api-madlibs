angular.module('MadLibApp', [])
  .controller('MadLibController', madCtrl)
  
  madCtrl.$inject = ['$http'];
  
  function madCtrl($http) {
    var madCtrl = this;

// #################### Persons function generate random persons
    
    madCtrl.ranPersonIndex = Math.floor(Math.random()*38)
    
    madCtrl.person = function(i) {
    madCtrl.peopleArr = [];
      while ( i > 0){
        $http.get('http://swapi.co/api/people/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.peopleArr.push(response.data.name);

          }, function(error) {
              // console.error(error)
          })

         i--;
      }
    }
    madCtrl.person(87)
    setTimeout( function (){
      console.log(madCtrl.peopleArr.length);
    }
    , 60000);
// ####################  function generate random starship
    madCtrl.ranShip = Math.floor(Math.random()*37)
    madCtrl.shipArr = [];
    madCtrl.ship = function(i) {
      while ( i > 0){
        $http.get('http://swapi.co/api/starships/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.shipArr.push(response.data.name);
          }, function(error) {
              // console.error(error)
          })

         i--;
      }
    }
    madCtrl.ship(37)
    // madCtrl.ranShipIndex = Math.floor(Math.random()*
      console.log(madCtrl.shipArr.length)
    

// ####################  function generate random planet
    // var ranPlanet = Math.floor(Math.random()*37)
    madCtrl.planetArr = [];
    madCtrl.planet = function(i) {
      while ( i > 0){
        $http.get('http://swapi.co/api/planets/' + i)
         .then(function(response){
            madCtrl.space = madCtrl.planetArr.push(response.data.name);

          }, function(error) {
              // console.error(error);
          })
        i--;

      }

    }
    madCtrl.planet(37)
    setTimeout(function () {
     
      madCtrl.ranPlanetIndex = Math.floor(Math.random()*((madCtrl.peopleArr).length))
      console.log(madCtrl.ranPlanetIndex )
    }, 15000);
  }