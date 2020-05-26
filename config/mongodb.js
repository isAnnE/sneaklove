const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true, // Anne : ça je l'ai rajouté, extrait du fichier day 9, à vérifier
});

mongoose.connection.on("connected", () => {console.log("yay mongodb connected :)");});

mongoose.connection.on("error", () => {console.error("nay db error sorry :(");}); // Anne : mini modif : console.log --> error, normalement ça ne change pas gd chose)




