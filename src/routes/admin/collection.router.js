const express = require('express');
const passport = require('passport');
const {ProductController, CollectionController} = require('../../Controllers');

const router = express.Router();

router.get(
    '/collections',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        CollectionController.getCollections(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.get(
    '/collection/:id',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        ProductController.getProductsByCollection(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
