
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};

exports.harvard = function(req, res){
  res.render('harvard.html', { title: 'Express' });
};


