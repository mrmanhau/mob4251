import mongoose from 'mongoose';
import { ProductSchema } from '../models/products';

const Product = mongoose.model('products', ProductSchema);

//Lay ra danh sach product
export const getProducts = (req, res) => {
    Product.find({}, (err, product) => {
        if(err){
            res.send(err)
        }
        res.render('product/index', { products: product });
    });
}
// Them san pham
export const addProduct = (req, res, next) => {
    console.log('1');
    var model = new Product();
    model.name = req.body.name;
    model.price = req.body.price;
    model.cate_id = req.body.cate_id;
    model.detail = req.body.detail;
    model.image = req.file.path.replace('public', '');
    
    model.save(function(err){
        if(err){
        res.send("Luu khong thanh cong")
        }
        res.send("Luu thanh cong")
        // res.redirect('/');
    });
}

export const formAddProduct = (req,res) => {
    res.render('product/add-form', {});
}
