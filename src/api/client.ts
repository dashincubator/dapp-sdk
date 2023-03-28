import type { Client } from '@api/types';
import type { Object } from '@src/types';
import Dash from 'dash';


let testnet = true;


const connect = (options: Object = {}): Client => {
    options.network = 'mainnet';
    options.wallet = options.wallet || {};

    if (testnet) {
        options.dapiAddresses = options.dapiAddresses || [
            "34.213.25.113",
            "34.221.14.36",
            "54.212.235.188",
            "18.237.94.193",
            "35.88.177.184",
            "18.236.202.174",
            "35.93.150.186",
            "34.208.58.6",
            "35.90.217.152",
            "34.216.30.128",
            "54.201.96.255",
            "54.201.242.188",
            "35.93.23.127",
            "35.88.187.214",
            "34.222.238.16",
            "54.186.159.169",
            "52.88.93.8",
            "52.37.86.233",
        ];
        options.network = 'testnet';

        options.wallet ??= {};

        if (options.wallet?.mnemonic) {
            options.wallet.unsafeOptions = {
                skipSynchronizationBeforeHeight: 738080
            };
        }
    }

    // TODO: Remove once types are fixed in Dash package
    // @ts-ignore
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
