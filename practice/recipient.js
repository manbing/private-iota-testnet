const utils = require('./iota_utilities.js');
const IOTA = require('iota.lib.js');
const iota = new IOTA ({});

const dir = require('./directory.js');

let trans_array = utils.getTransfers(dir.peggie_seed);
trans_array.then(result => {
    for (trans of result) {
        var i;
        let hash = trans[0].hash;
        console.log("trans hash:", hash);
        
        let tryte_msg = (trans[0].signatureMessageFragment.length%2==0)?
                    trans[0].signatureMessageFragment : trans[0].signatureMessageFragment.slice(0, -1);
        let message = iota.utils.fromTrytes(tryte_msg);

        for (i = 0; i < message.length; i++) {
            if (message[i].charCodeAt() == 0)  {
                break;    
            }
        }
        
        var msg = message.slice(0, i);
        //console.log('msg.length:'+ msg.length+", msg:"+msg);

        let obj = JSON.parse(msg);
        console.log("obj.s_address:", obj.s_address);
        console.log("obj.action:", obj.action);
        console.log("obj.value:", obj.value);
    };
});
