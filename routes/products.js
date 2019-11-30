import express from 'express';
import multer from 'multer';
import { getProducts, addProduct, formAddProduct } from '../controllers/products';
const storage = multer.diskStorage({
    destination: function(req, file, cb){
      // cau hinh noi luu tru file upload
      cb(null, './public/uploads');
    },
    filename: function(req, file, cb){
      // cau hinh ten file upload
      cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage});
const router = express.Router();


/* GET product page. */
router.get('/', getProducts);


// Form add sản phẩm
router.get('/add', formAddProduct);

router.post('/save-add', upload.single('image'), addProduct);
module.exports = router;
