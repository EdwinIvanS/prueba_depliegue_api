const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("error", (error) => {
    console.error(error);
  });
  
  db.once("open", () => {
    console.log("Conectado a la base de datos");
  });

  module.exports = db;