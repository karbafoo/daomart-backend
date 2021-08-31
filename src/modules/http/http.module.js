const sendResponse = (res, result) => {
    res.json({
        success: true,
        data: result,
    });
};

const sendError = (res, err) => {
    console.log('err', err);
    if (err && err.code) {
        res.status(err.code).send(err);
    } else {
        res.status(500).send({code: 500, msg: 'Something went wrong'});
    }
};

module.exports = {
    sendResponse,
    sendError,
};
