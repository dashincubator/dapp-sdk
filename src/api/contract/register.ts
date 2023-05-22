import type { Client, Contract, Identity } from '@api/types';
import type { Object } from '@src/types';


const register = async ({ platform }: Client, definition: Object, identity: Identity): Promise<Contract> => {
    let contract = await platform.contracts.create(definition, identity),
        result = await platform.dpp.dataContract.validate(contract);

    if (!result.isValid()) {
        for (let i = 0; i < result.errors.length; i++) {
            console.error(result.errors[i].toString());
        }
        throw new Error('Contract is not valid');
    }

    return await platform.contracts.publish(contract, identity)
        .catch((e: Error) => console.error('Something went wrong:\n', e));
};


export default register;
