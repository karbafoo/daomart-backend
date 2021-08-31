const Product = require('./product.model');

const getProducts = () => {
    return new Promise((resolve, reject) => {
        Product.find({})
            .sort({created_at: -1})
            .populate({
                path: 'category',
            })
            .lean()
            .then((ddocs) => {
                resolve(parseProducts(ddocs));
            })
            .catch(reject);
    });
};
const makeNewProduct = ({
    category,
    code,
    price,
    name,
    description,
    avatar,
    tags,
}) => {
    return new Promise((resolve, reject) => {
        const newProduct = new Product({
            status: 'new',
            category: category,
            code: code,
            name: name,
            description: description,
            avatar: avatar,
            price: price,
            tags: tags,
        });
        newProduct
            .save()
            .then((newDoc) => {
                resolve(newDoc.toObject());
            })
            .catch(reject);
    });
};

module.exports = {
    getProducts,
    makeNewProduct,
};

const parseProducts = (ddocs) => {
    return ddocs.map((d) => ({
        product_id: d._id,
        category: d.category ? d.category.name : 'NO_CATEGORY',
        type: d.category ? d.category.type : 'NO_TYPE',
        code: d.code || d._id,
        name: d.name,
        price: d.price,
        description: d.description,
        avatar: d.avatar,
        tags: d.tags,
    }));
};
