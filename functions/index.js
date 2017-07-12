const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  let config = require('./test.json');
  // request.body
  let toSend=request.body
  toSend.newVal="hello again"
  toSend.hello="No "
  //request.assert('email','this isn\'t an email').isEmail();
  // let errors=request.validationErrors();
  if(typeof toSend.email !="string" )
  {
    // console.log(errors)
    return response.status(400).send('bad email')
  }
  response.json(toSend);
 });