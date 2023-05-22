import type { Object } from '@src/types';
import Dash from 'dash';


let testnet = true;


const connect = (options: Object = {}) => {
    options.network = 'mainnet';
    options.wallet = options.wallet || {};

    if (testnet) {
        options.network = 'testnet';
        options.wallet.unsafeOptions = {
            skipSynchronizationBeforeHeight: 700000
        };
    }

    return new Dash.Client(options);
};

const network = {
    mainnet: () => {
        testnet = false;
    },
    testnet: () => {
        testnet = true;
    }
};


export default { connect, network };
