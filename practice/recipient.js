const utils = require('./utilities.js');
const IOTA = require('iota.lib.js');
const iota = new IOTA ({});

//const key = { addresses: ['BOWYMBUDBEO9O9KHJFDXJLTMRGJYQJQ9QPJNRHHTNKNMSPBNCXO9NKSVBJYZLBJNPKZYIXXINS9NUCDRU'] };
//const key = { tags: ['9I9999999999999999999999999'] };
const addr = 'BOWYMBUDBEO9O9KHJFDXJLTMRGJYQJQ9QPJNRHHTNKNMSPBNCXO9NKSVBJYZLBJNPKZYIXXINS9NUCDRU';

/*
let find = utils.find(key);
find.then(function(result) {
    console.log("find:", result);
});
*/

let trans_array = utils.getTransfers(addr);
trans_array.then(result => {
    for (trans of result) {
        let hash = trans[0].hash;
        console.log("trans hash:", hash);
        
        let tryte_msg = (trans[0].signatureMessageFragment.length%2==0)?
                    trans[0].signatureMessageFragment : trans[0].signatureMessageFragment.slice(0, -1);
        let message = iota.utils.fromTrytes(tryte_msg);
        console.log("message:", message);
    };
});
