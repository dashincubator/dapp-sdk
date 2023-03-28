import apps from './apps';
import config from './config';
import entity from './entity';
import storage from './storage';
import user from './user';


// Test platform login
// let initialized = false;

// (async function init() {
//     if (initialized) {
//         return;
//     }

//     initialized = await user.session.start();

//     if (initialized) {
//         console.log('sucessfully logged into platform');
//     }
//     else {
//         console.log('platform connection failed');
//     }
// })();


export default { apps, config, entity, storage, user };
export { apps, config, entity, storage, user };
