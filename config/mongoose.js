const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('Error connecting to database', err));




// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/node.js');

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// db.once('open', function(){
//     console.log('Connected to database :: MongoDB');
// });



// module.exports = db;