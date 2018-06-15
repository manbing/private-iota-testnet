const IOTA = require('iota.lib.js')
const iota = new IOTA({})

var tips_hash_cache = [];

iota.api.getTips( function(error, hashes) {
    console.log('getTips:', hashes);
    tips_hash_cache = hashes;
}
);

iota.api.getLatestInclusion(tips_hash_cache, function (err, states) {
        if (err) {
                console.log('err:', err);
        } 
        else {
        for (var i in states) {
                console.log('123:', states[i]);
            if (states[i]) {
                console.log('states:', states[i]);
            }
        }
        }
}
);


/*
iota.api.getNodeInfo((error, nodeInfo) => {
    if (error) {
        console.error('getNodeInfo error', error)
    } else {
        console.log('getNodeInfo result', nodeInfo)
    }
})
*/

//const seed = 'TNUO9CBKEUBXFKPCOFBHCBXQDZQRXJEBXKIMIMZHD9LUBPRGVMNARHLVQGABAFLFWXPMLUOUCQRKSFZST'
/*
iota.api.getNewAddress(seed, (error, address) => {
   if (error) {
       console.error('getNewAddress error', error)
   } else {
       console.log('new address generated: ' + address)
   }
})
*/
/*
iota.api.getInputs(seed, (error, transactions) => {
  if (error) {
     console.error('get account data failure', error)
  } else {
     console.log('get account data: ', transactions)
  }
});
*/
/*
var hashs = [];
iota.api.getTransactionsObjects(tips_hash_cache, (error, transactions) => {
        if (error) {
        	console.error('getTransactionsObjects failure:', error)
        } else {
        	console.log('getTransactionsObjects success: ', transactions)	
        }
})
*/;
