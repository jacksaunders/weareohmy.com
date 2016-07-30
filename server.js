var express = require('express')
  , logger = require('morgan')
  , app = express()
  , exphbs  = require('express-handlebars');

  app.engine('handlebars', exphbs({defaultLayout: 'main'}));
  app.set('view engine', 'handlebars');
  app.use(express.static(__dirname + '/dist'));

  app.get("/", function(req ,res){
    res.render("home");
  })

  app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 5000))
  })
