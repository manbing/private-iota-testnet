var IOTA = require('iota.lib.js');
var crypto = require('crypto');

var iota = new IOTA ({});

const attach = async (s_seed, r_seed, packet) => {
    const d_address = await generateAddress(r_seed);
    const s_address = await generateAddress(s_seed);
    packet.s_address = s_address;

    const transfer =[
        {
            address: d_address,
            value: 0,
            tag: 0,
            message: iota.utils.toTrytes(JSON.stringify(packet))
        }
    ];

    const transaction = await sendTransfer(r_seed, transfer);
    return transaction;
};

const sendTransfer = async (seed, transfers) => {
    var p = new Promise((res, rej) => {
        console.log("Attaching to Tangle");
        iota.api.sendTransfer(seed, 6, 15, transfers, (e, s) => {
            if (e) return rej(e);
            res(s);
        });
    });

    return p;
};

const generateAddress = async seed => {
    var p = new Promise((res, rej) => {
        iota.api.getNewAddress(seed, {index:0}, (e, s) => {
            if (e) return rej(e);
            res(s);
        });
    });

    return p;
};

const find = async addresses => {
    var p = new Promise((res, rej) => {
        iota.api.findTransactions(addresses, (e, s) => {
            if (e) return rej(e);
            res(s);
        });
    });

    return p;
};

const getTransfers = async address => {
    var p = new Promise((res, rej) => {
        iota.api.getTransfers(address, (e, s) => {
            if (e) return rej(e);
            res(s);
        });
    });

    return p;
};

module.exports = {
    attach,
    find,
    getTransfers,
    sendTransfer
};
