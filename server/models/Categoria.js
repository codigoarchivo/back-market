const { Schema, model } = require("mongoose");

const CategoriaSchema = new Schema(
  {
    nombre: {
      type: String,
      maxlength: 50,
      require: true,
      unique: true,
    },
    descripcion: {
      type: String,
      maxlength: 255,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Categoria", CategoriaSchema);
