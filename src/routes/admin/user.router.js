const express = require('express');
const passport = require('passport');
const {UserController} = require('../../Controllers');
const {HttpModule} = require('../../modules');
const router = express.Router();

router.get(
    '/by-address',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        UserController.getByAddress(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.get(
    '/query',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        UserController.getAll(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
