const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const querystring = require('querystring');
 


exports.helloWorld = functions.https.onRequest((request, response) => {
 
let responseObject={
"speech": "Barack Hussein Obama II was the 44th and current President of the United States.",
"displayText": "Barack Hussein Obama II was the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
"data": {},
"contextOut": [],
"source": "DuckDuckGo"
}
  // request.body
  console.log(request.body.result.parameters)
  
  
  let company=request.body.result.parameters.companies
  let position= request.body.result.parameters.Positions
  let duration = request.body.result.parameters.duration
  responseObject.speech=requestBody
  
  response.send(responseObject);
 });