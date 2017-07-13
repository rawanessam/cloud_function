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
  //console.log(request.body.result.parameters.duration.amount)
  
  
  let company=request.body.result.parameters.companies
  let position= request.body.result.parameters.Positions

  let transaltor={
    'mo':'month'
  //y
}
transaltor['mo']
  // if(request.body.result.parameters.duration.amount==1)
  // {
  //   if (request.body.result.parameters.duration.unit=='mo')
  //   {
  //     let duration_amount=String(1)+'month'
  //   } else if(request.body.result.parameters.duration.unit=='yr') {
  //     let duration_amount=String(1)+'year'
  //   }else if(request.body.result.parameters.duration.unit=='wk'){
  //     let duration_amount=String(1)+'week'
  //   } else{
  //     let duration_amount=String(1)+'day'
  //   }
  // }else{
  //   if (request.body.result.parameters.duration.unit=='mo')
  //   {
  //     let duration_amount=String(request.body.result.parameters.duration.amount)+'months'
  //   }else if(request.body.result.parameters.duration.unit=='wk'){
  //     let duration_amount=String(request.body.result.parameters.duration.amount)+'weeks'
  //   } else{
  //     let duration_amount=String(request.body.result.parameters.duration.amount)+'days'
  //   }
  // }  
  
  
    responseObject.speech="You waroked as a "+ position + " at "+ company +' for'
    console.log('Yes')
    response.json(responseObject);
  // }else{
  //   response.json({})
  // }
  1
  
  
 });