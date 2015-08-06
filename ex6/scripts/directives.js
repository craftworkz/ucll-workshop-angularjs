angular.module('intro')
  .directive('introGreetingName', function() {
    return {
      template: '<h1>Welcome to our Introduction to AngularJS  {{ name }}</h1>'
    }
  })
  .directive('introList', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/list.tpl.html',
      scope: {
        list : '=list',
        listName : '@listName',
        alertFunction: '=alertFunction',
        deleteFunction: '=deleteFunction'
      },
      link: function (scope) {
      }
    }
  })

  .directive('introBattle', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/battle.tpl.html',
      scope: {
        heroesList: "=heroes",
        villainsList: "=villains",
      },
      link: function (scope, elements, attr) {

        scope.setRandomFighters = function () {
          scope.hero = getRandomContestant(scope.heroesList);
          scope.villain = getRandomContestant(scope.villainsList);
        };

        var getRandomContestant = function (list) {
          var randomNumber = Math.floor((Math.random() * list.length));
          return list[randomNumber];
        }

        scope.setRandomFighters();
      }

    }
});
