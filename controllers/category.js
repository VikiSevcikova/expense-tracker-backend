const Category = require("../models/Category");
const User = require("../models/User");

exports.getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

exports.addCategory = async (req, res, next) => {
    try{
        const category = req.body;
        console.log(req)
        const newCategory = await Category.create({...category});
        return res.status(200).json({category: newCategory, message: "Category successfully added."});
    }catch(error){
        return res.status(500).json({message: "There is an issue."});
    }
}

/* edit category */
exports.editCategory = async (req, res, next) => {
  try {
      await Category.findOneAndUpdate(req.params.id, {$set: req.body}, {new: true})

      return res.status(200).json({message: "Category details were changed."});
  } catch (error) {
    next(error);
  }
};

/* delete category */
exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove(req.params.id);

    return res.status(200).json({ message: "Category was deleted." });
  } catch (error) {
    next(error);
  }
};
