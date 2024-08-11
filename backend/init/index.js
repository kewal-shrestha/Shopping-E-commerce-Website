const mongoose = require("mongoose");
const initData = require("./all_product.js");

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

mongoose.connect("mongodb+srv://kwl_stha:my_pw@cluster2.l0zx4y9.mongodb.net/");

const intiDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(initData.data);
};

intiDB();
