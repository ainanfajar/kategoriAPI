import mongoose from "mongoose";

const Category = mongoose.Schema({
    kategoriID: {
        type: Number,
        require: true
    },
    nama: {
        type: String,
        require: true
    },
},
{
    timestamps: true,
});

export default mongoose.model("Categories", Category);