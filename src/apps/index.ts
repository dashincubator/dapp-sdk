import type { Object } from '@src/types';
// import audio from './audio';
// import comment from './comment';
// import gallery from './gallery';
// import image from './image';
import notary from './notary';
// import video from './video';
import user from '@src/user';


let apps: Object = { notary },
    definitions: Object = {},
    methods: Object = {};


for (let key in apps) {
    definitions = Object.assign(definitions, apps[key].definitions);
    methods[key] = apps[key].methods;
}


// 'contract' ID should be manually defined once platform is released on mainnet
const register = async () => {
    let contract = '';

    return await user.apps.get('sdk', async (): Promise<Object | string> => {
        if (contract) {
            return contract;
        }

        return await user.contract.register(definitions);
    });
};


export default Object.assign(methods, { register });
