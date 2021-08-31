const express = require('express');
const passport = require('passport');
const {ProductController} = require('../../controllers');
const {HttpModule} = require('../../modules');
const router = express.Router();

router.get(
    '/',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.params || {};
        console.log('body', body);
        ProductController.getProducts(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.post(
    '/new',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.body || {};

        ProductController.makeNewProduct(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

router.get(
    '/id/:pid',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        ProductController.getById(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
