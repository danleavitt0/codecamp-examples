var express = require('express'),
    app = express(),
    morgan = require('morgan')


app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))

app.get('*', function(req, res) {
  res.send('./' + req.url);
})

app.listen(process.env.PORT || 3000);