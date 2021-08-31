const express = require('express');
const passport = require('passport');
const {ContractController} = require('../../Controllers');
const {HttpModule} = require('../../modules');
const router = express.Router();

router.post(
    '/',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.body || {};
        console.log('body', body);
        ContractController.getContracts(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
