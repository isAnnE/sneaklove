const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  price: Number,
  stock: Number,
  ref: String,
  image: {
    type: String,
    default: "https://avantisport.nl/image/product/none/adidas-Cloudfoam-Race-AW5287.jpg",
    // anne : vérifier si ce type de lien marche
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});


const productModel = mongoose.model("Product", sneakerSchema);

module.exports = productModel;