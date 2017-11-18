'use strict';

describe('Voter Client SPA', function () {

  var request = require('request');
  var series = require('async/series');
  var requestJson = require('request-json');
  var apiGateway = 'http://gateway:8080/';
  var client = requestJson.createClient(apiGateway);
  var election = '2016 Presidential Election';
  var data = {};
  var appUrl = 'http://client:9090/';

  // Make Voter API synchronously to create test data
  // NOTE: First two calls remove all candidates and votes from voters database!
  series([
    function (callback) {
      request.post(apiGateway + 'voter/candidates/drop', function (error, response, body) {
        console.log('voter/candidates/drop');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'voter/candidates/drop');
      });
    },
    function (callback) {
      request.post(apiGateway + 'voter/votes/drop', function (error, response, body) {
        console.log('voter/votes/drop');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'voter/votes/drop');
      });
    },
    function (callback) {
      data = {
        firstName: 'Donald',
        lastName: 'Trump',
        politicalParty: 'Republican Party',
        election: election
      };

      client.post('candidate/candidates', data, function (error, response, body) {
        console.log('candidate/candidates');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
      });
      callback(null, 'candidate/candidates');
    },
    function (callback) {
      data = {
        firstName: 'Darrell',
        lastName: 'Castle',
        politicalParty: 'Constitution Party',
        election: election
      };

      client.post('candidate/candidates', data, function (error, response, body) {
        console.log('candidate/candidates');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'candidate/candidates');
      });
    },
    function (callback) {
      data = {
        firstName: 'Hillary',
        lastName: 'Clinton',
        politicalParty: 'Democratic Party',
        election: election
      };

      client.post('candidate/candidates', data, function (error, response, body) {
        console.log('candidate/candidates');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'candidate/candidates');
      });
    },
    function (callback) {
      request(apiGateway + 'candidate/simulation', function (error, response, body) {
        console.log('candidate/simulation');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'candidate/simulation');
      });
    },
    function (callback) {
      request(apiGateway + 'voter/simulation/db/election/2016%20Presidential%20Election', function (error, response, body) {
        console.log('voter/simulation/db/election');
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the JSON response payload
        callback(null, 'voter/simulation/db/election');
      });
    }
  ], function (err, results) {
    console.log(results);
  });

  beforeEach(function () {
    browser.get(appUrl);
    browser.driver.manage().window().maximize();
    // browser.pause();
  });

  it('should display three candidate choices in drop-down', function () {
    var candidateSelect = element(by.id('candidateSelect')).all(by.tagName('option'));
    expect(candidateSelect.count()).toEqual(4);
    expect(candidateSelect.get(1).getText()).toEqual('Darrell Castle');
  });

  it('should display message when vote is placed', function () {
    element(by.cssContainingText('option', 'Darrell Castle')).click();
    element(by.buttonText('Submit')).click();
    expect(element(by.className('new-vote ng-binding')).getText()).toEqual('Vote for Darrell Castle!');
  });

  it('should increment vote count when vote is placed', function () {
    element(by.cssContainingText('option', 'Darrell Castle')).click();
    element(by.buttonText('Submit')).click();
    expect(element(by.id('total-votes')).getText()).toBeGreaterThan('0');
  });
});
