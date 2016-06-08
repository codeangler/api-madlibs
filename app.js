angular.module('MadLibApp', [])
  .controller('MadLibController', madCtrl)
  
  madCtrl.$inject = ['$http'];
  
  function madCtrl($http) {
    var madCtrl = this;
    madCtrl.greeting = "hi";

    madCtrl.person = function() {
      var ranPerson = Math.floor(Math.random()*87)
      $http.get('http://swapi.co/api/people/' + ranPerson)
       .then(function(response){
          console.log("inside the random $http " + response.data.name)
          madCtrl.printPerson = response.data.name;
        }, function(error) {
            console.error(error)
        })

    }
    madCtrl.person()

    // var ranStarship = Math.floor(Math.random()*61)
    //  $http.get('http://swapi.co/api/planets/' + ranStarship)
    //   .then(function(response){
    //       console.log(response.data.name)
    //     }, function(error) {
    //         console.error(error)
    //     })

    // var ranPlanet = Math.floor(Math.random()*61);
    // $http.get('http://swapi.co/api/planets/' + ranPlanet)
    //   .then(function(response){
    //       console.log(response.data.name)
    //     }, function(error) {
    //         console.error(error)
    //     })

  }