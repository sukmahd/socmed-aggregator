'use strict'

const FB  = require('fb')


function getUsername(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', function(response){
    res.send(response)
  })
}

function postToFacebook(req,res){
  const accessToken = req.body.token;
  const msg = req.body.pesan;
  FB.setAccessToken(accessToken)
  FB.api('me/feed', 'post', {
    message: msg
  }, function(resp){
    res.send(resp)
  })
}

module.exports = {
  getUsername,
  postToFacebook
};
