// Use Markdown in comments, allowing nice code documentation to be
// generated using docco/grunt-docco.

// __Module Dependencies__
var express = require( 'express' );
var path = require( 'path' );
var config = require('config');

//Create server
var app = express();


app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
//Show all errors in development
app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.use( express.static( path.join( __dirname, 'site') ) );

//Start server
app.listen(5000, function() {
  console.log( 'Express server listening on port %d', 5000 );
});