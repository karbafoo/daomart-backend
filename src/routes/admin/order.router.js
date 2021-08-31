const express = require('express');
const passport = require('passport');
const {OrderController} = require('../../controllers');
const {HttpModule} = require('../../modules');
const router = express.Router();

router.post(
    '/get',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.body || {};
        OrderController.getOrderById(body)
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
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.body || {};
        OrderController.newOrder(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.post(
    '/cancel',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.body || {};
        OrderController.cancelOrder(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.post(
    '/complete',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.body || {};
        OrderController.completeOrder(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
module.exports = router;
