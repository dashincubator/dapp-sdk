import apps from '../apps';
import user from '../user';
// UNCOMMENT TO USE IPFS
// import { ipfs } from '../storage';


/////////////////////////////////////////////////
// WARNING
/////////////////////////////////////////////////
// - IPFS file upload will not resolve to a gateway
// - For now use a third party gateway like pinata or infura
//   until Platform integrates IPFS or someone gets the green light to run a gateway
/////////////////////////////////////////////////
// - When using the IPFS related methods ERRORS WILL BE THROWN
//   they are general connection issues with IPFS that will be
//   resolved by using a 3rd party provider or Platform IPFS instance.
/////////////////////////////////////////////////


let initialized = false;

(async function init() {
    if (initialized) {
        return;
    }

    console.log('initializing');


    /////////////////////////////////////////////////
    // STEP 1
    /////////////////////////////////////////////////
    // - Uncomment object and add your wallet mnemonic with tDash
    // - The next few lines will take care of wallet connection, platform connection, and document registration
    initialized = await user.session.start(
        // {
        //     wallet: {
        //         mnemonic: ''
        //     }
        // }
    );

    if (initialized) {
        console.log('initialized');
    }
    else {
        console.log('identity creation failed');
    }

    console.log('registering apps');

    await apps.register();

    console.log('registered apps');


    /////////////////////////////////////////////////
    // STEP 2 ( CID ONLY )
    /////////////////////////////////////////////////
    // - When you accept a file upload via file input tag, run it through `await ipfs.cid([file])`
    // - You will receive the CID of the file ( it's content hash )
    /////////////////////////////////////////////////

    // let upload = document.getElementById('upload');

    // upload.addEventListener('change', async function() {
    //     let cid = await ipfs.cid(this.files[0]);

    //     NOTE: You now have the CID, move on to STEP 3
    // });


    /////////////////////////////////////////////////
    // STEP 2 ( CID + IPFS FILE UPLOAD )
    /////////////////////////////////////////////////

    // let upload = document.getElementById('upload');

    // upload.addEventListener('change', async function() {
    //     let cid = await ipfs.upload(this.files[0]);

    //     NOTE: You now have the CID and the file was uploaded to IPFS, move on to STEP 3
    // });


    /////////////////////////////////////////////////
    // STEP 3
    /////////////////////////////////////////////////
    // - Uncomment the following lines to create a notary document
    // - Replace the CID with the CID of your document
    // - The notary document will be created and saved as a Dash Platform Document
    // - If you attempt to submit the same CID twice an error will be thrown on the second attempt
    //   - I setup the notary document to throw an error if the CID already exists
    /////////////////////////////////////////////////

    // console.log('creating notary document');

    // let notary = await apps.notary.save(
    //     await apps.notary.create({ cid })
    // );

    // console.log(notary);
})();
