const express = require('express');
const passport = require('passport');
const {ProductCategoryController} = require('../../controllers');
const {HttpModule} = require('../../modules');
const router = express.Router();

router.get(
    '/',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.params || {};
        console.log('body', body);
        ProductCategoryController.getCategories(body)
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

        ProductCategoryController.makeNewCategory(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
