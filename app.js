angular.module('MadLibApp', [])
  .controller('MadLibController', madCtrl)
  
  madCtrl.$inject = ['$http'];
  
  function madCtrl($http) {
    var madCtrl = this;

// #################### Persons function generate random persons
    
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
    madCtrl.person(15)
  
// ####################  function generate random starship
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
    madCtrl.ship(15)
  
    
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
    madCtrl.planet(15)

//  Random Number Function
    function randomNum() {
      return Math.floor(Math.random()*8)
    }
    madCtrl.a = randomNum();
    madCtrl.b = randomNum() ;
    console.log(madCtrl.a);

    madCtrl.reload = function () {
      window.location.reload(true);
    }
  }