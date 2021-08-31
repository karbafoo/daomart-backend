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
router.post(
    '/candy',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.body || {};

        ContractController.setCandyAddress(body)
            .then((result) => {
                console.log('success', result);
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.post(
    '/moonshot',
    (req, res, next) => next(),
    (req, res, next) => {
        const body = req.body || {};

        ContractController.setMoonshotAddress(body)
            .then((result) => {
                console.log('success', result);
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);

module.exports = router;
