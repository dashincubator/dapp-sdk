import apps from './apps';
import config from './config';
import entity from './entity';
import storage from './storage';
import user from './user';
// import { ipfs } from './storage';


let initialized = false;

(async function init() {
    if (initialized) {
        return;
    }

    console.log('initializing');

    initialized = await user.session.start();

    if (initialized) {
        console.log('initialized');
    }
    else {
        console.log('identity creation failed');
    }

    console.log('registering apps');

    await apps.register();

    console.log('registered apps');

    // console.log('creating notary document');

    // let notary = await apps.notary.save(
    //     await apps.notary.create({ cid: 'QmW18rYg4P2A3sawiEV2WHpCAWFt4ZBxMQqC8wZNM3Q' })
    // );

    // console.log(notary);
})();

// IPFS Upload
// let temp = document.getElementById('temp');

// temp!.addEventListener('change', async function() {
//     //@ts-ignore
//     let cid = await ipfs.cid(this!.files[0]);

//     console.log({ cid });
//     console.log('uploading to IPFS');

//     //@ts-ignore
//     await ipfs.upload(this!.files[0]).then((endpoint) => {
//         console.log(`upload complete ${endpoint}`);
//         window.open(endpoint, '_blank');
//     });
// });


export default { apps, config, entity, storage, user };
export { apps, config, entity, storage, user };
