const IOTA = require('iota.lib.js')
const iota = new IOTA({})

iota.api.getNodeInfo((error, nodeInfo) => {
    if (error) {
        console.error('getNodeInfo error', error)
    } else {
        console.log('getNodeInfo result', nodeInfo)
    }
})

const seed = '9PJKSRZLNJKQIM9IBOFLEPTCDKBLFFRVXMRCXQBGKGWDQEXHNNNHTDLDXDAQCPJUDLKZVDQLBQNPQWNZQ'
iota.api.getNewAddress(seed, (error, address) => {
   if (error) {
       console.error('getNewAddress error', error)
   } else {
       console.log('new address generated: ' + address)
   }
})

const Depth = 3 // constant defined by IOTA - how deep to look for the tips in the Tangle
const MinWeightMagnitude = 16 // constant defined by IOTA - the difficulty of PoW

const transfers = [
    {
        // where are we sending the transaction to?
        address: 'TNUO9CBKEUBXFKPCOFBHCBXQDZQRXJEBXKIMIMZHD9LUBPRGVMNARHLVQGABAFLFWXPMLUOUCQRKSFZST',

        // how many tokens are we transferring?
        value: 0,

        // do we want to comment on this transaction?
        message: iota.utils.toTrytes('Hello World!')        
    }
]

iota.api.sendTransfer(seed, Depth, MinWeightMagnitude, transfers, (error, transactions) => {
  if (error) {
     console.error('sendTransfer error', error)
  } else {
     console.log('transactions sent!', transactions)
  }
})
