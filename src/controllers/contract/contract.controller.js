const Contract = require('./contract.model');

const getContracts = ({chain}) => {
    return new Promise((resolve, reject) => {
        Contract.find({chain: chain})
            .sort({created_at: -1})
            .lean()
            .then((ddocs) => {
                const contracts = parseContracts(ddocs);

                const candy = contracts.find((c) => c.name === 'Candy');

                const moonshot = contracts.find((c) => c.name === 'Moonshot');
                console.log('contracts', {
                    candy: candy,
                    moonshot: moonshot,
                });
                resolve({
                    candy: candy,
                    moonshot: moonshot,
                });
            })
            .catch(reject);
    });
};
const setCandyAddress = ({chain, address}) => {
    return new Promise((resolve, reject) => {
        Contract.findOne({
            chain: chain,
            name: 'Candy',
        }).then((doc) => {
            if (doc) {
                doc.set({
                    address: address,
                });
                doc.save()
                    .then((newDoc) => {
                        resolve(newDoc.toObject());
                    })
                    .catch(reject);
            } else {
                const newContract = new Contract({
                    chain: chain,
                    name: 'Candy',
                    address: address,
                });
                newContract
                    .save()
                    .then((newDoc) => {
                        resolve(newDoc.toObject());
                    })
                    .catch(reject);
            }
        });
    });
};
const setMoonshotAddress = ({chain, address}) => {
    return new Promise((resolve, reject) => {
        console.log('moonshot', address);
        Contract.findOne({
            chain: chain,
            name: 'Moonshot',
        }).then((doc) => {
            if (doc) {
                doc.set({
                    address: address,
                });
                doc.save()
                    .then((newDoc) => {
                        resolve(newDoc.toObject());
                    })
                    .catch(reject);
            } else {
                const newContract = new Contract({
                    chain: chain,
                    name: 'Moonshot',
                    address: address,
                });
                newContract
                    .save()
                    .then((newDoc) => {
                        resolve(newDoc.toObject());
                    })
                    .catch(reject);
            }
        });
    });
};

module.exports = {
    getContracts,
    setCandyAddress,
    setMoonshotAddress,
};

const parseContracts = (ddocs) => {
    return ddocs.map((d) => ({
        chain: d.chain,
        address: d.address,
        name: d.name,
    }));
};
