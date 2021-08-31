const express = require('express');
const passport = require('passport');
const {ArchiveController} = require('../../controllers');

const router = express.Router();

router.get(
    '/archives',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        ArchiveController.getArchives(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
router.get(
    '/archive/:id',
    passport.authenticate('jwt.admin', {session: false}),
    (req, res, next) => {
        const body = req.params || {};
        ArchiveController.getCollectionsByArchive(body)
            .then((result) => {
                HttpModule.sendResponse(res, result);
            })
            .catch((err) => {
                HttpModule.sendError(res, err);
            });
    }
);
module.exports = router;
