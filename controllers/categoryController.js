import Category from "../models/Category.js";
export const getCategories = async(req, res)=>{
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
export const getCategoryID = async(req, res)=>{
    try {
        const category = await Category.find({kategoriID:req.params.id});
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
export const saveCategory=async(req, res)=>{
    const category = new Category(req.body);
    try {
        const ressave = await category.save();
        res.status(201).json(ressave);
    } catch (error) {
        res.status(400).json({status:false, message:error.message});
    }
}
export const updateCategory=async(req, res)=>{
    var categoryID = await Category.findOne({kategoriID:req.params.id});
    if(!categoryID) return res.status(404).json({status:false, message:"Data not found"});
    try {
        const ressave = await Category.updateOne({_id:categoryID._id}, {$set:req.body});
        res.status(200).json(ressave);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}
export const deleteCategory=async(req, res)=>{
    var categoryID = await Category.findOne({kategoriID:req.params.id});
    if(!categoryID) return res.status(404).json({status:false, message:"Data not found"});
    try {
        const resdelete = await Category.deleteOne({_id:categoryID._id});
        res.status(200).json(resdelete);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}