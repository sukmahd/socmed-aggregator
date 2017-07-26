'use strict'

require('dotenv').config()

const OAuth = require('oauth')
const oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
   process.env.CONSUMER_KEY, //consumer key
   process.env.CONSUMER_SECRET,//consumer secret key
  '1.0A',
  null,
  'HMAC-SHA1'
);

function test(req,res){
  oauth.get(
    'https://api.twitter.com/1.1/trends/place.json?id=23424977',
    process.env.TOKEN,//token
    process.env.TOKEN_SECRET,//secret token
    function(err, data,resp){
      if(err){
        res.send(err);
      }else {
        res.send(data);
      }
    }
  )
}

function search(req,res){
  let search = req.params.key
  oauth.get(
    `https://api.twitter.com/1.1/search/tweets.json?q=${search}`,
    process.env.TOKEN,//token
    process.env.TOKEN_SECRET,//secret token
    function(err, data,resp){
      if(err){
        res.send(err);
      }else {
        res.send(data);
      }
    }
  )
}

function timeline(req,res){
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json?status=test',
    process.env.TOKEN,//token
    process.env.TOKEN_SECRET,//secret token
    function(err, data,resp){
      if(err){
        res.send(err);
      }else {
        res.send(data);
      }
    }
  )
}

function post(req,res){
  let status = req.body.status;
  oauth.post(
    `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
     process.env.TOKEN,//token
     process.env.TOKEN_SECRET,//secret token
      'kamu jahat',
      'jahat', //emang teks gini aja
    (e, data, resp) => {
      if (e) res.send(e);
      res.send(data)
    }
  );
}

module.exports = {
  search,
  timeline,
  post,
  test
};
