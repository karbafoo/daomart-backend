const express = require('express');
const {UserController} = require('../../controllers');

const router = express.Router();

router.get('/by-address', (req, res, next) => {
    const body = req.params || {};
    UserController.getByAddress(body)
        .then((result) => {
            HttpModule.sendResponse(res, result);
        })
        .catch((err) => {
            HttpModule.sendError(res, err);
        });
});
router.get('/query', (req, res, next) => {
    const body = req.params || {};
    UserController.getAll(body)
        .then((result) => {
            HttpModule.sendResponse(res, result);
        })
        .catch((err) => {
            HttpModule.sendError(res, err);
        });
});

module.exports = router;
