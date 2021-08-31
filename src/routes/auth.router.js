const express = require('express');
const router = express.Router();
const {UserController} = require('../controllers');

router.get('/nonce/:addr', (req, res, next) => {
    const body = req.params || {};
    UserController.getNonceForAddress(body.addr)
        .then((nonce) => {
            HttpModule.sendResponse(res, result);
        })
        .catch((err) => {
            HttpModule.sendError(res, err);
        });
});

router.post('/login', (req, res, next) => {
    const body = req.body || {};
    UserController.Authenticate(body)
        .then((result) => {
            HttpModule.sendResponse(res, result);
        })
        .catch((err) => {
            HttpModule.sendError(res, err);
        });
});

module.exports = router;
