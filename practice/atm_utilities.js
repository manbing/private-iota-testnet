var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
        output: process.stdout,
        terminal: false
});

const getInput = async (prompt) => {
    var lines = [];
    var p = new Promise(function(res, rej) {
            rl.question(prompt, function (line) {
                    res(line);
            });  
    });

    return p;
}

module.exports = {
    getInput
};
