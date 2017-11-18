/**
 * @ngdoc function
 * @name voterClientApp.controller:VoterController
 * @description
 * # VoterController
 * Controller of the voterClientApp
 */
;(function (ng) {
  'use strict';

  ng.module('voterClientApp')
    .controller('VoterController', ['$scope', 'VoterService', function ($scope, VoterService) {
      $scope.candidates;
      $scope.vote;
      $scope.results;
      $scope.resultsCount;
      $scope.winners;
      $scope.winnersVotes;

      $scope.getCandidates = function () {
        VoterService.getCandidates()
          .then(function (response) {
            // console.log(response);
            $scope.candidates = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.PostVote = function () {
        if ($scope.selected) {
          VoterService.postVote($scope.selected)
            .then(function (response) {
              // console.log(response);
              $scope.vote = response;
              $scope.GetResults();
              $scope.getResultsVotes();
              $scope.getWinnersVotes();
              $scope.selected = null;
            }, function (error) {
              console.error(error);
            });
        }
      };

      $scope.GetResults = function () {
        VoterService.getResults()
          .then(function (response) {
            // console.log(response);
            $scope.results = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.getResultsVotes = function () {
        VoterService.getResultsVotes()
          .then(function (response) {
            // console.log(response);
            $scope.resultsCount = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.getWinners = function () {
        VoterService.getWinners()
          .then(function (response) {
            // console.log(response);
            $scope.winners = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.getWinnersVotes = function () {
        VoterService.getWinnersVotes()
          .then(function (response) {
            // console.log(response);
            $scope.winnersVotes = response;
          }, function (error) {
            console.error(error);
          });
      };

      $scope.$on('$viewContentLoaded', function () {
        $scope.getCandidates();
        $scope.GetResults();
        $scope.getResultsVotes();
        $scope.getWinnersVotes();
      });
    }]);

}(window.angular));
