const utils = require('./iota_utilities.js');

const r_seed = 'BOWYMBUDBEO9O9KHJFDXJLTMRGJYQJQ9QPJNRHHTNKNMSPBNCXO9NKSVBJYZLBJNPKZYIXXINS9NUCDRU'

let tarnsaction = utils.attach('', r_seed, "Hello ivy!");
tarnsaction.then(function(result) {
    console.log("tarnsaction:", result);
});
