const atm_utils = require('./atm_utilities.js');
const iota_utils = require('./iota_utilities.js');
const dir = require('./directory.js');

const menu = () => {
    console.log('');
    console.log('');
    console.log('********** IOTA ATM *************');
    console.log('1. Deposit');
    console.log('2. Withdraw');
    console.log('3. Balance inquiry');
    console.log('4. Exit');
    console.log('*********************************');
    process.stdout.write('> ');
}

const deposit_menu = () => {
    console.log('');
    console.log('Please inpute deposit value');
    process.stdout.write('> ');
}

const withdraw_menu = () => {
    console.log('');
    console.log('Please inpute withdraw value');
    process.stdout.write('> ');
}

async function main()
{
    while (1) {
        menu();
        const value = await atm_utils.getInput('');

        switch (value) {
            case '1':
                deposit_menu();
                let value = await atm_utils.getInput('');
                console.log('deposit value = ' + value);
                //let tarnsaction = iota_utils.attach(dir.ivy_seed, dir.peggie_seed, {action: 'deposit', value: value});
                break;

            case '2':
                withdraw_menu();
                let value2 = await atm_utils.getInput('');
                console.log('withdraw value = ' + value2);
                break;

            case '3':
                console.log('Do inquory');
                break;

            case '4':
                process.exit();
                break;

            default:
                break;
        }
    };
}

main();
