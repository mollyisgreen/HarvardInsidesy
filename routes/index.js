
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var Suggestion = mongoose.model('Suggestion');


exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};

exports.harvard = function(req, res){
  res.render('harvard.html', { title: 'Express' });
};

exports.about = function(req, res){
  res.render('about.html', { title: 'Express' });
};

exports.yourguide = function(req, res){
  res.render('yourguide.html', { title: 'Express' });
};

exports.purchased = function(req, res){
  res.render('purchased.html', { title: 'Express' });
};

exports.submitSuggestion = function(req, res){
    new Suggestion({
	    content    : req.body.content,
	    updated_at : Date.now()
	  }).save( function( err, todo, count ){
	    res.redirect( '/' );
	  });
};